import React from "react";
import ReactDOM from "react-dom";
import TodoListItem from "./TodoListItem";
import FilterButtons from "../filterButtons/FilterButtons";
import initState from "../../reducers/initState";

class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: null
    };

    this.baseState = this.state;

    this.showDoneItems = this.showDoneItems.bind(this);
    this.showUndoneItems = this.showUndoneItems.bind(this);
    this.showAllItems = this.showAllItems.bind(this);
    this.itemsCpp = this.itemsCpp.bind(this);

  }

  showAllItems () {
    // this.setState(this.baseState)
    this.setState(prevState => ({
      items: this.props.items
    }));
    console.log("Show All" + this.state.items);
  }

  showDoneItems () {
    let itemsCp = this.props.items;
    let itemsList = itemsCp.filter((item) => {
      if (item.done === true)
        return item;
    });
    this.setState(prevState => ({
      items: itemsList
    }));
    console.log("Show Done" + this.state.items);
  }

  showUndoneItems () {
    // let itemsList = Object.assign([], this.props.items);
    let itemsCp = this.props.items;
    let itemsList = itemsCp.filter((item) => {
      return item.done === false;
    });
    this.setState(prevState => ({
      items: itemsList
    }));
    console.log("Show Undone" + this.state.items);
  }
  itemsCpp () {
    if (this.state.items === null)
      return this.props.items;
    else
      return this.state.items;
  }

  render() {
    // console.log("2 ToDo list items: "+this.state.items);
    let list = this.itemsCpp().map((item, index) => {
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
        <FilterButtons
          showAllItems={this.showAllItems}
          showDoneItems={this.showDoneItems}
          showUndoneItems={this.showUndoneItems}
        />
        <ul className="todo-list">{list}</ul>
      </div>
    );
  }
}

export default TodoList;
