import React from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';

function TodoApp(props) {
	const [state, setState] = React.useState({
		todoArray: [],
		todoCounter: 0,
	});

	function todoAddCbFunction(todoText) {
		setState((currentState) => {
			const todo = {
				id: currentState.todoCounter,
				text: todoText,
				completed: false,
			};

			currentState.todoArray.push(todo);

			return Object.assign({}, currentState, { todoCounter: currentState.todoCounter + 1 });
		});
	}

	return (
		<div>
			<TodoHeader />
			<TodoAdd todoAddCb={todoAddCbFunction} />
			<TodoList todoArray={state.todoArray} />
		</div>
	);
}

export { TodoApp as default };
