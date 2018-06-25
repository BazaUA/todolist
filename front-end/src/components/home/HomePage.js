import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemAction from '../../actions/itemActions';
import toastr from 'toastr';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, props.item)
    };
    this.saveItem = this.saveItem.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  saveItem(event){
    event.preventDefault();
    this.props.actions.addItem(this.state.item);
  }

  updateState(event) {
    const field = event.target.name;
    let newItem = Object.assign({}, this.state.item);
    newItem[field] = event.target.value;
    this.setState({item: newItem});
  }

  render() {
    const {items} = this.props;
    return (
      <div>
        <input type="text" name="name" value={this.state.item.name} onChange={this.updateState} />
        <input type="submit" value="Add course" onClick={this.saveItem}/>
        {items.map(item =>
          <p key={item.id}>{item.name} uhiuh</p>
        )}
      </div>
    );
  }


}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  let item = {id: 8, name: '', isDone: true, description: 'asdf', date: 'asdf'};
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
