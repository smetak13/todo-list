import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/postActions';
import { changeMode } from '../actions/postActions';

class EditItem extends Component {
  state = {
    value: ''
  };

  componentDidMount() {
    this.setState({ value: this.props.item.value });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { _id, isActive, date } = this.props.item;
    const item = {
      _id: _id,
      value: this.state.value,
      isActive: isActive,
      date: date
    };
    this.props.updateItem(item);
    this.props.changeMode(item._id, true);
    this.setState({ value: '' });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <div>
        <input
          className="table-input pb-1 mr-2"
          type="text"
          value={this.state.value}
          autoFocus
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
        <button
          onClick={this.handleSubmit.bind(this)}
          className="btn btn-sm btn-secondary"
        >
          Change
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { changeMode, updateItem }
)(EditItem);
