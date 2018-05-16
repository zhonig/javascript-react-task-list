import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo, clearTodo }) => (
  <div className="App-todolist">
    <ul>
      {
        todos.length > 0 ?
          todos.map(todo =>
            <Todo
              key={todo.id}
              id={todo.id}
              removeTodo={removeTodo}
              {...todo}
              onClick={() => toggleTodo(todo.id)}
            />
          )
        : <div style={{fontWeight: 'bold'}}>Task List is Empty</div>
      }
    </ul>
    <button className="btn btn-danger" onClick={() => clearTodo()}>
      Clear Tasks&nbsp;
      <i className="fa fa-remove"></i>
    </button>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  clearTodo: PropTypes.func.isRequired
};

export default TodoList;