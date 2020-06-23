import React from 'react';
import PropTypes from 'prop-types';
import { TodoDeleteCbContext, TodoToggleCbContext } from '../contexts/TodoAppContexts';
import styles from '../styles/style.module.css';

function Todo(props) {
	const { id, text, completed } = props;
	return (
		<div className={styles.todo}>
			<div>
				<p style={{ textDecoration: completed ? 'line-through' : '' }}>{text}</p>
				<TodoToggleCbContext.Consumer>
					{(callback) => {
						return (
							<button
								onClick={callback.bind(null, id)}
								className={completed ? styles.buttonCompleted : styles.buttonUncompleted}
							>
								{completed ? 'UNCOMPLETE' : 'COMPLETE'}
							</button>
						);
					}}
				</TodoToggleCbContext.Consumer>
				<TodoDeleteCbContext.Consumer>
					{(callback) => {
						return (
							<button onClick={callback.bind(null, id)} className={styles.delete}>
								DELETE
							</button>
						);
					}}
				</TodoDeleteCbContext.Consumer>
			</div>
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
