import React, {PropTypes} from 'react';

const CheckBox = (props) => {
    return (
      <label htmlFor={props.id} className="css-label" />
    );
}
CheckBox.propTypes = {
  id: PropTypes.number.isRequired
};

export default CheckBox;
