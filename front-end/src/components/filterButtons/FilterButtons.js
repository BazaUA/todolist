import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class FilterButtons extends React.Component {
  render() {
    return (
      <div>
        <p />
        <button className="btn btn-warning">Show All</button>
        <button className="btn btn-success">Completed</button>
        <button className="btn btn-primary">None completed</button>
      </div>
    );
  }
}

export default FilterButtons;
