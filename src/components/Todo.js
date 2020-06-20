import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  const { text } = props;
  return <div>{text}</div>;
}

// Prop types is good for debugging props provided to Todo
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
