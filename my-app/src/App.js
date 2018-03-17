import React, { Component } from 'react';
import AddItem from './addItemComponent/addItemComponent';
import './App.css';

class todoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <div>
          <p className="title">Todo-List with ReactJS</p>
        </div>
        <AddItem />
      </div>
    );
  }
}

export default todoList;
