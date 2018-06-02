import React, { Component } from 'react';
import AddItem from './addItemComponent/addItemComponent';

import { Title, TodoList, Root } from './styles.js';

class todoList extends Component {
  render() {
    return (
      <Root>
        <TodoList>
          <div>
            <Title>Todo-List with ReactJS</Title>
          </div>
          <AddItem />
        </TodoList>
      </Root>
    );
  }
}

export default todoList;
