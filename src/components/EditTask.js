import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actionsTasks";

const EditTask = (props) => {
  const {  className, task } = props;
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [editTodo, setEditTodo] = useState(task.text);

  const toggle = () => setModal(!modal);
  const edit = () => {
    dispatch(editTask({ id: task.id, text: editTodo }));
    toggle();
  };

  return (
    <div >
      <i className='fas fa-edit' onClick={toggle}/>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <input
            type='text'
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={edit}>
            Save changes
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditTask;
