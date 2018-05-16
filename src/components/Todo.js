import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, id, removeTodo }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button className="btn btn-danger" onClick={e => {
        e.stopPropagation();
        removeTodo(id);        
      }}>
      Remove Task&nbsp;
      <i className="fa fa-remove"></i>
    </button>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default Todo;