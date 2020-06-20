import React from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';

function TodoApp(props) {
	const [state, setState] = React.useState({ todoArray: [], todoCounter: 0 });

	return (
		<div>
			<TodoHeader />
			<TodoAdd />
			<TodoList todoArray={state.todoArray} />
		</div>
	);
}

export { TodoApp as default };
