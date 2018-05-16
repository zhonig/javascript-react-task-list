import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="App-addtodo">
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        <div className="form-group">
            <input className="form-control" placeholder="What needs to be done?" ref={ node => input = node } />
            <button className="btn btn-success" type="submit" style={{marginLeft: '4px'}}>
              <i className="fa fa-plus"></i>
            </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);