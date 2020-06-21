import React from 'react';
import PropTypes from 'prop-types';
import { TodoDeleteCbContext, TodoToggleCbContext } from '../contexts/TodoAppContexts';

function Todo(props) {
	const { id, text, completed } = props;
	return (
		<div>
			<p>{text}</p>
			<TodoToggleCbContext.Consumer>
				{(callback) => {
					return <button onClick={callback.bind(null, id)}>{completed ? 'UNCOMPLETE' : 'COMPLETE'}</button>;
				}}
			</TodoToggleCbContext.Consumer>
			<TodoDeleteCbContext.Consumer>
				{(callback) => {
					return <button onClick={callback.bind(null, id)}>DELETE</button>;
				}}
			</TodoDeleteCbContext.Consumer>
		</div>
	);
}

// Prop types is good for debugging props provided to Todo
Todo.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
};

export default Todo;
