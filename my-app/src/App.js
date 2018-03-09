import React, { Component } from 'react';
import './App.css';

class todoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <div>
          <p className="title">Todo-List with ReactJS</p>
        </div>
        <div className="todo-item">
          <input type="text"></input>
          <button className="addItem">Add Item</button>
        </div>
      </div>
    );
  }
}

export default todoList;
