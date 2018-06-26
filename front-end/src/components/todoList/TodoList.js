import React, {PropTypes} from 'react';
import ReactDOM from "react-dom";
import TodoListItem from "./TodoListItem";
import * as itemAction from "../../actions/itemActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

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

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let item = {id: 0, name: '', done: false, description: '', date: ''};
  return {
    items: state.items,
    item: item
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
