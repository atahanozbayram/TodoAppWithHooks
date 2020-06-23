import React from 'react';
import styles from '../styles/style.module.css';

function TodoHeader(props) {
	return (
		<div className={styles.todoHeader}>
			<h2>Todo List</h2>
		</div>
	);
}

export { TodoHeader as default };
