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

  click = () => {
    this.state.palavras.push(this.state.texto);
  };

  render() {
    const listItems = this.state.palavras.map(frases => (
      <div className="itens">
        {frases}
        <button className="excluir">X</button>
      </div>
    ));

    return (
      <div className="todo-item">
        <input onInput={e => this.setState({ texto: e.target.value })} />
        <button className="addItem" onClick={this.click}>
          Add Item
        </button>
        {listItems}
      </div>
    );
  }
}
