import React, { Component } from 'react';

export default class addItem extends Component {
  constructor(){
    super();
    this.state = {
      palavras: [],
      texto: '',
      cont: 0
    }
  }

  onClicou = () => {
    this.setState({
      palavras: this.state.palavras[this.state.cont] = this.state.texto,
      cont: this.state.cont + 1
    });
  }

  render(){
    return (
      <div className="todo-item">
        <input onInput={(e) => this.setState({texto: e.target.value})} name="text" type="text"></input>
        <button className="addItem" onClick={this.onClicou}>Add Item</button>
        <div>{this.state.palavras}</div>
      </div>
    );
  }
}