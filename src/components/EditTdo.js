import React, { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions/ActionTodos';

function EditTodo({todo}) {
  const dispatch=useDispatch();
    const [show, setShow] = useState(false);
const [task,setTask]=useState(todo.task)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleEdit=()=>{
dispatch(editTodo(todo.id,task));
handleClose()
}
  return (
    <div >
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your text</Modal.Title>
        </Modal.Header>
        <FormControl type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        );
}

export default EditTodo;