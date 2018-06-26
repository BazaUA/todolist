import React from "react";
import ReactDOM from "react-dom";
import TodoListItem from "./TodoListItem";

class TodoList extends React.Component {
  render() {
    let list = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          index={index}
          item={item}
          delete={this.props.delete}
        />
      );
    });

    return <ul className="todo-list">{list}</ul>;
  }
}

export default TodoList;
