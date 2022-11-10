import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addtTodo } from '../redux/actions/ActionTodos';

const AddTodo = () => {
	const [task,setTask]=useState("")
	const dispatch=useDispatch();
	const handleSubmit=(e)=>{
	e.preventDefault();
     if(task){
	dispatch(addtTodo(task));
	setTask("");
}
}	

	return (
		<Form  style={{display:'flex',justifyContent:'space-around',
		margin: 'auto',
		width: '50%',
		background:'green',
		padding:' 10px',
	  }} onSubmit={handleSubmit}>
<FormControl type='text' value={task} placeholder="enter tour task" onChange={e=>setTask(e.target.value)}/>
<Button type="submit" >Add</Button>
		</Form>
	);
};

export default AddTodo;