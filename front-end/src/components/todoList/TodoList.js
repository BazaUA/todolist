import React from "react";
import ReactDOM from "react-dom";
import TodoListItem from "./TodoListItem";
import FilterButtons from "../filterButtons/FilterButtons";
import initState from "../../reducers/initState";

class TodoList extends React.Component {

  constructor(props, context) {
    super(props, context);

    // console.log("ToDo list items: " + Object.assign([], this.props.items));
    // console.log("ToDo list items: "+this.props.items);
    this.state = {
      items: props.items
    };

  }

  showAllItems () {
    this.setState(this.baseState)
    console.log("Show All" + this.state.items);
  }

  showDoneItems () {
    let itemsList = this.props.items.filter((item) => {
      if (item.done === true)
        return item;
    });
    this.setState(prevState => ({
      items: itemsList
    }));
    console.log("Show Done" + this.state.items);
  }

  showUndoneItems () {
    let itemsList = this.props.items.filter((item) => {
      if (item.done === false)
        return item;
    });
    this.setState(prevState => ({
      items: itemsList
    }));
    console.log("Show Undone" + this.state.items);
  }

  render() {
    // console.log("2 ToDo list items: "+this.state.items);
    let list = this.props.items.map((item, index) => {
      return (
          <TodoListItem
            key={item.id}
            index={index}
            item={item}
            delete={this.props.delete}
            done={this.props.done}
            date={this.props.date}
          />
      );

    });

    return (
      <div>
        <ul className="todo-list">{list}</ul>
      </div>
    );
  }
}

export default TodoList;
