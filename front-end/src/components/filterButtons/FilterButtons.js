import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";


const FilterButtons = (props) => {
  return (
    <div>
      <p/>
      <button className="btn btn-warning" onClick={props.showAllItems} >Show All</button>
      <button className="btn btn-success" onClick={props.showDoneItems} >Completed</button>
      <button className="btn btn-primary" onClick={props.showUndoneItems} >None completed</button>
    </div>
  );
}


export default FilterButtons;
