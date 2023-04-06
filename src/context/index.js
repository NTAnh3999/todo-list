import { createContext, useEffect, useState } from "react";
import store from "../store";

export const GlobalContext = createContext();

export const GlobalProvider = function ({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("inProgress");
  const [formValues, setFormValues] = useState({
    id: "",
    todoName: "",
    dueDate: "",
    status: "inProgress",
  });
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const todos = store.get();
    const filteredTodos = todos.filter((todo) => todo.status === filter);
    setTodoList(filteredTodos);
  }, [filter]);
  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }
  function resetFormValues() {
    setFormValues({
      todoName: "",
      dueDate: "",
      status: "inProgress",
    });
  }
  function onChangeFormValues(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues((prevValues) => ({ ...prevValues, [inputName]: inputValue }));
  }
  function addNewTodo(todo) {
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    store.set(todo);
  }
  function deleteTodo(id) {
    const deletedItem = todoList.find((item) => item.id === id);
    setTodoList(todoList.filter((todo) => todo.id !== deletedItem.id));
    store.remove(deletedItem);
  }
  function onFilteredTodoList(status) {
    const newTodoList = todoList.filter(
      (todoItem) => todoItem.status === status
    );
    setTodoList(newTodoList);
  }
  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        todoList,
        isModalOpen,
        formValues,
        setFilter,
        filter,
        setIsDarkMode,
        resetFormValues,
        toggleModal,
        onChangeFormValues,
        addNewTodo,
        deleteTodo,
        onFilteredTodoList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
