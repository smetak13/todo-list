import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createItem } from '../actions/postActions';

class AddNewItem extends Component {
  handleSubmit = () => {
    const item = {
      value: 'New Item',
      isActive: false,
      date: 'today'
    };

    this.props.createItem(item);
  };

  render() {
    return (
      <div className="date-title-wrapper">
        <h4 className="date-title">{this.props.title}</h4>
        <div className="spacer" />
        <i className="fas fa-plus" onClick={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usedIDs: state.list.usedIDs
});

export default connect(
  mapStateToProps,
  { createItem }
)(AddNewItem);
