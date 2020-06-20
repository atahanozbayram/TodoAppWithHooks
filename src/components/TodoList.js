import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';

function TodoList(props) {
  const { todoArray } = props;

  return (
    <ul>
      {todoArray.map((todo) => {
        return <Todo />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todoArray: PropTypes.arrayOf(PropTypes.shape(Todo.propTypes)),
};
