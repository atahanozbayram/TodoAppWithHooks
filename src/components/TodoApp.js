import React, { useEffect } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';
import { TodoDeleteCbContext, TodoToggleCbContext } from '../contexts/TodoAppContexts';

function TodoApp(props) {
	const [state, setState] = React.useState({
		todoArray: [],
		todoCounter: 0,
	});

	// this effect will be used at the first render of the TodoApp
	useEffect(() => {
		setState(JSON.parse(localStorage.getItem('todoApp')));
	}, []);

	// this effect will keep logging the new state on every change
	useEffect(() => {
		localStorage.setItem('todoApp', JSON.stringify(state));
	}, [state]);

	// Function to be called for adding new todo
	function todoAddCbFunction(todoText) {
		// check wheter todoText is empty
		// if so terminate the function

		if (todoText === '') return;

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
			return Object.assign({}, currentState, {
				todoArray: currentState.todoArray.map((todo) => {
					if (todo.id === todoId) return Object.assign(todo, { completed: !todo.completed });
					return todo;
				}),
			});
		});
	}

	return (
		<div>
			<TodoHeader />
			<TodoAdd todoAddCb={todoAddCbFunction} />
			<TodoDeleteCbContext.Provider value={todoDeleteCbFunction}>
				<TodoToggleCbContext.Provider value={todoToggleCbFunction}>
					<TodoList todoArray={state.todoArray} />
				</TodoToggleCbContext.Provider>
			</TodoDeleteCbContext.Provider>
		</div>
	);
}

export { TodoApp as default };
