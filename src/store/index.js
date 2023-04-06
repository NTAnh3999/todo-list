const get = function () {
  const store = localStorage.getItem("todoList");
  return JSON.parse(store) || [];
};
const set = function (todoItem) {
  const dataStore = get();
  const newStore = [...dataStore, todoItem];
  localStorage.setItem("todoList", JSON.stringify(newStore));
};
const remove = function (deletedItem) {
  const dataStore = get();
  const newStore = dataStore.filter(
    (todoItem) => todoItem.id !== deletedItem.id
  );
  localStorage.setItem("todoList", JSON.stringify(newStore));
};
const store = {
  get,
  set,
  remove,
};
export default store;
