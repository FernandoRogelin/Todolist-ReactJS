import React, { Component } from "react";
import "./addItem.css";

export default class addItem extends Component {
  constructor() {
    super();
    this.state = {
      palavras: [],
      texto: ""
    };
  }

  Clicou = () => {
    console.log(this.state.texto);
    this.setState({
      palavras: this.state.palavras.push(this.state.texto)
    });
  };

  render() {
    return (
      <div className="todo-item">
        <input onInput={e => this.setState({ texto: e.target.value })} />
        <button className="addItem" onClick={this.Clicou}>
          Add Item
        </button>
        <div className="itens" />
      </div>
    );
  }
}
