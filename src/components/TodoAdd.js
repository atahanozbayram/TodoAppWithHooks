import React from 'react';
import styles from '../styles/style.module.css';

function TodoAdd(props) {
	const inputRef = React.createRef();
	const { todoAddCb } = props;

	function buttonClick(event) {
		event.preventDefault();
		// Check whether the inputRef is not null.
		// There is not expected situation for it to be null when this function called.
		// But just in case
		if (inputRef.current === null) return;

		todoAddCb(inputRef.current.value);

		// After state update happens we should clear the input's value and regain focus
		inputRef.current.value = '';
		inputRef.current.focus();
	}

	return (
		<div className={styles.todoAdd}>
			<form>
				<div>
					<label>Todo:</label>
					<input type="text" ref={inputRef} />
					<button onClick={buttonClick}>ADD</button>
				</div>
			</form>
		</div>
	);
}

export { TodoAdd as default };
