import React from "react";
import ReactDOM from "react-dom";

class TodoListItem extends React.Component {
  constructor() {
    super();

    this.state = { checked: false };
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
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

  onCloseClick(item, event) {
    this.props.delete(item);
  }

  render() {
    let item = this.props.item;
    let time = new Date(item.timestamp).toDateString();
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
          onClick={this.onCloseClick.bind(this, this.props.index)}
          className="close"
        >
          ×
        </i>
      </li>
    );
  }
}

export default TodoListItem;
