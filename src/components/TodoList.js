import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';

function TodoList(props) {
	const { todoArray } = props;

	return (
		<ul>
			{todoArray.map((todo) => {
				return <Todo id={todo.id} text={todo.text} completed={todo.completed} key={todo.id} />;
			})}
		</ul>
	);
}

TodoList.propTypes = {
	todoArray: PropTypes.arrayOf(PropTypes.shape(Todo.propTypes)),
};

export { TodoList as default };
