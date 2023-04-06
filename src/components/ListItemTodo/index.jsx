import React, { useContext } from "react";
import TodoItem from "../TodoItem";
import { GlobalContext } from "../../context";

const ListItemTodo = () => {
  const { todoList } = useContext(GlobalContext);

  return (
    <React.Fragment>
      {todoList.length !== 0 ? (
        todoList.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      ) : (
        <tr style={{ textAlign: "center", fontSize: "1.5rem" }}>
          <td colSpan={5}>Loại công việc chưa có ghi chú</td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default ListItemTodo;
