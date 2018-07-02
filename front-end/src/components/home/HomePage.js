import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemAction from '../../actions/itemActions';
import TodoList from "../todoList/TodoList";
import TodoInput from "../todoInput/TodoInput";
import FilterButtons from "../filterButtons/FilterButtons";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import toastr from 'toastr';

//Update by Vadik
import "../../styles/styles.css";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item),

      //Update by Vadik
      items: this.props.items

      //end
    };


    //Update by Vadik
    this.deleteItem = this.deleteItem.bind(this);
    this.addItems = this.addItems.bind(this);
    this.doneRequest = this.doneRequest.bind(this);
    //end
  }

/*  componentDidMount() {
    this.setState({items: todoItems});
  }*/
/*  showAllItems () {
    this.setState(this.baseState)
    console.log("Show All" + this.state.items);
  }

  showDoneItems () {
    console.log("Pobeda? " + this.props.items + " end");
    let itemsList = Object.assign([], this.props.items);
    itemsList.filter((item) => {
       return item.done === true;
    });
    console.log("New attempt: " + itemsList[0].date);
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
  }*/

  //Update by Vadik

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
    // console.log(this.props.items);
    let itemsList = this.props.items.filter((item) => {
      if (item.done === true)
        return item;
    });
    // console.log(itemsList[0]);
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
