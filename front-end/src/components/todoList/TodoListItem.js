import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import CheckBox from './CheckBox';
import {connect} from 'react-redux';
import * as itemAction from "../../actions/itemActions";
import {bindActionCreators} from "redux";

class TodoListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {done: props.item.done};

    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.doneCheckbox = this.doneCheckbox.bind(this);
  }

  handleChangeCheckbox() {
    if (this.state.done) {
      this.props.done(this.props.item.id, false);
    } else {
      this.props.done(this.props.item.id, true);
    }
    this.setState({
      done: !this.state.done
    });
  }

  onCloseClick(event) {
    this.props.delete(this.props.item.id);
  }

  doneCheckbox() {
    if (this.state.done)
      return "cross-out-label";

  }

  render() {
    const item = this.props.item;
    const time = new Date(this.props.item.date);
    return (
      <li id={item.date}>
        <input type="checkbox" name={item.date} id={item.date} checked={this.state.done}
               onChange={this.handleChangeCheckbox}/>
        <input
          type="checkbox"
          name={item.date}
          id={item.date}
          className="css-checkbox"
          checked={this.state.done}
          onChange={this.handleChangeCheckbox}
        />
        <label htmlFor={item.name} className="css-label"/>
        <div className="info">
          <div className={this.doneCheckbox()}>{item.name}</div>
          <div className="time">[ {time.toDateString()} ]</div>
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
