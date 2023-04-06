import React, { useContext } from "react";
import {
  Button,
  CardBody,
  ListGroup,
  ListGroupItemHeading,
  Table,
} from "reactstrap";
import FilterButton from "../FilterButton";
import ListItemTodo from "../ListItemTodo";
import FormModal from "../FormModal";
import { GlobalContext } from "../../context";
const Content = () => {
  const { toggleModal, isDarkMode } = useContext(GlobalContext);
  return (
    <CardBody>
      <ListGroup flush>
        <ListGroupItemHeading>
          <Button color="primary" onClick={toggleModal}>
            Thêm mới
          </Button>
          <FilterButton />
        </ListGroupItemHeading>
        <Table hover dark={isDarkMode}>
          <thead>
            <tr>
              <th>id</th>
              <th>Todo Name</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <ListItemTodo />
          </tbody>
        </Table>
      </ListGroup>
      <FormModal />
    </CardBody>
  );
};

export default Content;
