import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';
import styles from '../styles/style.module.css';

function TodoList(props) {
	const { todoArray } = props;

	return (
		<div>
			<ul>
				{todoArray.map((todo) => {
					return (
						<li key={todo.id}>
							<Todo id={todo.id} text={todo.text} completed={todo.completed} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

TodoList.propTypes = {
	todoArray: PropTypes.arrayOf(PropTypes.shape(Todo.propTypes)),
};

export { TodoList as default };
