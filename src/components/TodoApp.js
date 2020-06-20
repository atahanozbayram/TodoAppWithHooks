import React from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';

function TodoApp(props) {
	const [state, setState] = React.useState({
		todoArray: [],
		todoCounter: 0,
	});

	// Function to be called for adding new todo
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

		// Function to be calld for deleting todo from the todoArray
		function todoDeleteCbFunction(todoId) {
			setState((currentState) => {
				return Object.assign({}, currentState, {
					todoArray: currentState.todoArray.filter((todo) => {
						if (todo.id === todoId) return false; // if the id matches return false so it will remove the todo from array
						return true; // if the id doesn't match return true, so it will keep the todo in the array
					}),
				});
			});
		}

		// Function to be called for toggling completed property of given todoId's matching todo
		function todoToggleCbFunction(todoId) {
			setState((currentState) => {
				Object.assign({}, currentState, {
					todoArray: currentState.todoArray.map((todo) => {
						if (todo.id === todoId) Object.assign({}, todo, { completed: !todo.completed });
						return todo;
					}),
				});
			});
		}
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
