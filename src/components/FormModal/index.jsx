import React, { useContext } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import toast from "react-hot-toast";
import { GlobalContext } from "../../context";
import generateRandomId from "../../utils";
const FormModal = () => {
  const {
    isModalOpen,
    toggleModal,
    formValues,
    onChangeFormValues,
    addNewTodo,
    resetFormValues,
  } = useContext(GlobalContext);
  const { todoName, dueDate, status } = formValues;
  const handleAddNewTodo = (e) => {
    e.preventDefault();
    formValues.id = generateRandomId();
    addNewTodo(formValues);
    toggleModal();
    resetFormValues();
    toast.success(`Thêm mới công việc ${formValues.todoName} thành công!`);
  };

  return (
    <Modal toggle={toggleModal} isOpen={isModalOpen}>
      <ModalHeader toggle={toggleModal}>Add Todo</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleAddNewTodo}>
          <FormGroup>
            <Label for="exampleEmail">Tên công việc</Label>
            <Input
              name="todoName"
              value={todoName}
              onChange={onChangeFormValues}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              id="exampleDate"
              name="dueDate"
              placeholder="date placeholder"
              type="date"
              value={dueDate}
              onChange={onChangeFormValues}
            />
          </FormGroup>
          <FormGroup>
            <Label for="status">Status</Label>
            <Input
              id="status"
              name="status"
              type="select"
              value={status}
              onChange={onChangeFormValues}
            >
              <option value="inProgress">In progress</option>
              <option value="done">Done</option>
            </Input>
          </FormGroup>
          <Button color="primary" type="submit">
            Thêm mới
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default FormModal;
