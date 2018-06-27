import React from "react";
import ReactDOM from "react-dom";

class TodoListItem extends React.Component {
  constructor() {
    super();

    this.state = { checked: false };
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
  }

  handleChangeCheckbox() {
    this.setState({
      checked: !this.state.checked
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
      <li id={this.timestamp}>
        <input
          type="checkbox"
          name={item.timestamp}
          id={item.timestamp}
          className="css-checkbox"
          checked={this.state.checked}
          onChange={this.handleChangeCheckbox}
        />
        <label htmlFor={item.timestamp} className="css-label" />
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

export default TodoListItem;
