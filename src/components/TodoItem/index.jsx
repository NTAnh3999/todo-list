import React, { useContext } from "react";
import Tag from "../Tag";
import { GoTrashcan } from "react-icons/go";
import { GlobalContext } from "../../context";
import { toast } from "react-hot-toast";
const TodoItem = ({ todo }) => {
  const { id, todoName, dueDate, status } = todo;
  const { deleteTodo } = useContext(GlobalContext);
  return (
    <tr key={id}>
      <td>#{id}</td>
      <td>{todoName}</td>
      <td>{dueDate}</td>
      <td>
        <Tag tagStatus={status} />
      </td>
      <td
        className="icon-delete"
        onClick={() => {
          const confirm = window.confirm(
            "Are you sure you want to delete this item?"
          );
          if (!confirm) return;
          deleteTodo(id);
          toast.success(`Xóa công việc ${todoName} thành công!`);
        }}
      >
        <GoTrashcan />
      </td>
    </tr>
  );
};

export default TodoItem;
