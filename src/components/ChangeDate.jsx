import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeDate } from '../actions/postActions';

class ChangeDate extends Component {
  state = {};

  handleDateChange(e) {
    const newDate = e.target.value;

    const { _id, value, isActive } = this.props.item;
    const item = {
      _id: _id,
      value: value,
      isActive: isActive,
      date: newDate
    };

    this.props.changeDate(item);
  }

  render() {
    return (
      <select
        onChange={this.handleDateChange.bind(this)}
        name="select-date"
        defaultValue={this.props.item.date}
      >
        <option value="today">Today</option>
        <option value="future">Future</option>
      </select>
    );
  }
}

export default connect(
  null,
  { changeDate }
)(ChangeDate);
