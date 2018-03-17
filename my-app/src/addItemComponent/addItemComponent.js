import React, { Component } from "react";
import './addItem.css';

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
    this.palavras[this.state.cont] = 
    <div className="list">{this.state.texto}
      <button onClick={this.onExcluir} className="excluir">X</button>
    </div>;
    
    this.setState({
      cont: this.state.cont + 1
    });
  };

  onExcluir = (e) => {
    let array = this.palavras;
    let index = array.indexOf(e.target.value);
    // console.log(oi);
    console.log(e.target.value);
    array.splice(index, 1);
    this.setState({palavras: array});
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
