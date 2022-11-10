import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch } from 'react-redux';
import { doneTodo,deletTodo } from '../redux/actions/ActionTodos';
import EditTdo from './EditTdo';

const TodoList = ({todo}) => {
const dispatch=useDispatch()
const handleDelite=()=>{
	if(window.confirm('are you sur to delete')){
		dispatch(deletTodo(todo.id))
	}
}
return (
		<div style={{display:'flex',justifyContent:'space-around',
			margin: 'auto',
			width: '50%',
			border: '3px solid green',
			padding:' 10px',
		  }}>
	<p style={{textDecoration: todo.done?"line-through":"none"}}>{todo.task}</p>
	<Button variant="danger" onClick={handleDelite}>Delete</Button>
	<EditTdo todo={todo}/>
	<Button variant="success" onClick={()=>dispatch(doneTodo(todo.id))}
	>{todo.done?"not done":"done"}</Button>
	</div>
		);
};

export default TodoList;