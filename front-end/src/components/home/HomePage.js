import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemAction from '../../actions/itemActions';
import TodoList from "../todoList/TodoList";
import TodoInput from "../todoInput/TodoInput";
import FilterButtons from "../filterButtons/FilterButtons";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import toastr from 'toastr';

import "../../styles/styles.css";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item),

      items: this.props.items

    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItems = this.addItems.bind(this);
    this.doneRequest = this.doneRequest.bind(this);
  }

  doneRequest(index, value) {
    if (value) {
      this.props.actions.doneItem(index);
    } else {
      this.props.actions.undoneItem(index);
    }
  }

  deleteItem(index) {
    this.props.actions.deleteItem(index);
    let items = Object.assign([], this.props.items);
    items.splice(index, 1);
    this.setState({items: items});
  }

  addItems(item) {
    if (item) {
      this.props.actions.addItem(item);
    }
  }

  render() {
    const {items} = this.props;
    let itemsList = this.props.items.filter((item) => {
      if (item.done === true)
        return item;
    });
    return (
      <div className="todo">
        <TodoInput add={this.addItems}/>

        <TodoList done={this.doneRequest} delete={this.deleteItem} items={this.props.items}  />

      </div>
    );
   }


}

HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);