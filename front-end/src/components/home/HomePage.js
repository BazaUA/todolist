import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemAction from '../../actions/itemActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    //const {items} = this.props;
    return (
      <div>
        {/*{items}*/}
        <h1>Hi</h1>
      </div>
    );
  }
}

HomePage.propTypes = {
  // actions: PropTypes.object.isRequired,
  // items: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
