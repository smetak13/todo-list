import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStatus } from '../actions/postActions';

class Checkbox extends Component {
  handleStatusChange(id, value, isActive, date) {
    const item = {
      _id: id,
      value: value,
      isActive: !isActive,
      date: date
    };
    this.props.changeStatus(item);
  }

  render() {
    const { _id, value, isActive, date } = this.props.item;
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.isActive}
          onChange={() => this.handleStatusChange(_id, value, isActive, date)}
          className="checkbox"
        />
      </div>
    );
  }
}

export default connect(
  null,
  { changeStatus }
)(Checkbox);
