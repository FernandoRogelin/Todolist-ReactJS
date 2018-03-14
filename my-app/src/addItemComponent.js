import React, { Component } from "react";

export default class addItem extends Component {
  constructor() {
    super();
    this.palavras = [];
    this.state = {
      texto: "",
      cont: 0
    };
  }

  onClicou = () => {
    this.palavras[this.state.cont] = <div>{this.state.texto}</div>;
    console.log(this.palavras);
    this.setState({
      cont: this.state.cont + 1
    });
  };

  render() {
    return (
      <div className="todo-item">
        <input
          onInput={e => this.setState({ texto: e.target.value })}
          name="text"
          type="text"
        />
        <button className="addItem" onClick={this.onClicou}>
          Add Item
        </button>
        <div className="itens">{this.palavras}</div>
      </div>
    );
  }
}
