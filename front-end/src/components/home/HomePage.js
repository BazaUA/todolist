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

let todoItems = [
  {
    name: "To do todo's design and something else",
    timestamp: 1529803020000
  },
  {
    name: "Selebrate YouthDay",
    timestamp: 1529803024000
  },
  {
    name: "Get some sleep [Real life]",
    timestamp: 1529803028000
  }
];
//end

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item),

      //Update by Vadik
      items: []
      //end
    };
/*    this.saveItem = this.saveItem.bind(this);
    this.updateState = this.updateState.bind(this);*/

    //Update by Vadik
    this.deleteItem = this.deleteItem.bind(this);
    this.addItems = this.addItems.bind(this);
    //end
  }

  componentDidMount() {
    this.setState({ items: todoItems });
  }
/*
  saveItem(event){
    event.preventDefault();
    this.props.actions.addItem(this.state.item);
  }

  updateState(event) {
    const field = event.target.name;
    let newItem = Object.assign({}, this.state.item);
    newItem[field] = event.target.value;
    this.setState({item: newItem});
  }*/

  //Update by Vadik

  deleteItem(index) {
    let items = this.state.items;

    items.splice(index, 1);
    this.setState({ items: items });
  }

  addItems(item) {
    if (item) {
      let items = this.state.items;
      items.push(item);
      this.setState({ items: items });
    }
  }

  render() {
    const {items} = this.props;
    return (
      <div className="todo" >
        <TodoInput add={this.addItems} />
        <FilterButtons />
        <TodoList delete={this.deleteItem} items={this.state.items} />
      </div>
    );
    //end
/*    return (
      <div>
        <input type="text" name="name" value={this.state.item.name} onChange={this.updateState} />
        <input type="submit" value="Add course" onClick={this.saveItem}/>
        {items.map(item =><div key={item.id}>
          <p >{item.name}</p>
          </div>
        )}
      </div>
    );*/
  }


}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let item = {id: 8, name: '', done: true, description: 'asdf', date: 'asdf'};
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
