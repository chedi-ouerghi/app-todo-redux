import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar' ;

const App = () => {
	return (
		<>
		<NavBar/>
		<br/>
		<div style={{
		border: '3px solid bleu',
		padding:' auto',}}>
			<AddTodo/>
			<TodoList/>
		</div>
		</>

	);
};

export default App;