import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions/postActions';

class DeleteItem extends Component {
  handleDelete(id) {
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div>
        <i
          className="fas fa-trash-alt"
          onClick={() => this.handleDelete(this.props.id)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { deleteItem }
)(DeleteItem);
