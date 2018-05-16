import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;