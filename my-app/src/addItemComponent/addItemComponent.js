import React, { Component } from "react";
import "./addItem.css";

export default class addItem extends Component {
  state = {
    palavras: [],
    texto: '',
  };

  AddItem = () => {
    var newArray = this.state.palavras.slice();
    newArray.push(this.state.texto);
    this.setState({ palavras: newArray });
  };

  onChangeText = evt => {
    this.state.texto = evt.target.value;
  };

  removePeople = evt => {
    var array = [...this.state.palavras];
    var index = array.indexOf(evt.target.value);
    array.splice(index, 1);
    this.setState({ palavras: array });
  };

  render() {
    const listItems = this.state.palavras.map(frases => (
      <div className="itens">
        {frases}
        <button className="excluir" onClick={this.removePeople}>X</button>
      </div>
    ));

    return (
      <div className="todo-item">
        <input onChange={this.onChangeText} />
        <button className="addItem" onClick={this.AddItem}>
          Add Item
        </button>
        {listItems}
      </div>
    );
  }
}
