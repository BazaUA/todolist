import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import CheckBox from './CheckBox';
import {connect} from 'react-redux';
import * as itemAction from "../../actions/itemActions";
import {bindActionCreators} from "redux";

class TodoListItem extends React.Component {
  constructor(props, context) {
    super();
    this.state = { done: props.item.done };
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
  }

  handleChangeCheckbox() {
    console.log("sdf : "+ this.state.done);
    if(this.state.done){
      this.props.done(this.props.item.id,false);
    }else {
      this.props.done(this.props.item.id,true);
    }
    this.setState({
      done: !this.state.done
    });
    // console.log(this.state.checked);
  }

  crossOutLabelStyle(id) {
    if (this.state.checked === true) {
      return "cross-out-label";
    }
  }

  onCloseClick(event) {
    this.props.delete(this.props.item.id);
  }

  render() {
    let item = this.props.item;
    let time = new Date(item.date).toDateString();
    // console.log(this.state.checked);
    return (
      <li id={item.id}>
        <input
          type="checkbox"
          name={item.id}
          id={item.id}
          className="css-checkbox"
          defaultChecked={this.state.done}
          onChange={this.handleChangeCheckbox}
        />
        <label htmlFor={item.id} className="css-label" />
        <div className="info">
          <div className={this.item}>{item.name}</div>
          <div className="time">[ {time} ]</div>
        </div>
        <i
          onClick={this.onCloseClick}
          className="close"
        >
          ×
        </i>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  item: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
  done: PropTypes.func.isRequired
};




export default TodoListItem;
