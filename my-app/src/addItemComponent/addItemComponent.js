import React, { Component } from "react";

import { TodoItem, AdicionaItem, Itens, Excluir } from './styles'

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

  onRemovePerson = index => {
    this.setState(() => {
      let newArray = [...this.state.palavras]
      newArray.splice(index, 1)
      return { palavras: newArray }
    })
  };

  render() {
    const listItems = this.state.palavras.map(frases => (
      <Itens>
        {frases}
        <Excluir onClick={this.onRemovePerson}>X</Excluir>
      </Itens>
    ));

    return (
      <div>
        <TodoItem onChange={this.onChangeText} />
        <AdicionaItem onClick={this.AddItem}>
          Add Item
        </AdicionaItem>
        {listItems}
      </div>
    );
  }
}
