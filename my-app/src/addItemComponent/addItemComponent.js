import React, { Component } from "react";
import "./addItem.css";

export default class addItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="todo-item">
        <input />
        <button className="addItem">Add Item</button>
        <div className="itens" />
      </div>
    );
  }
}
