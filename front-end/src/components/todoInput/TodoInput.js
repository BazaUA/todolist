import React from "react";
import ReactDOM from "react-dom";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let target = ReactDOM.findDOMNode(this.refs.input);

    if (target.value) {
      let dataToAdd = {
        name: target.value,
        timestamp: new Date().getTime()
      };

      this.props.add(dataToAdd);
      target.value = "";
    }
  }

  render() {
    return (
      <form className="form-todo" onSubmit={this.onSubmit}>
        <div className="form-title">Add new item:</div>
        <div className="form-container">
          <input ref="input" type="text" placeholder="Type something..." />
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}

export default TodoInput;
