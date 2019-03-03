import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMode } from '../actions/postActions';

class ChangeMode extends Component {
  changeMode(id, readMode) {
    let newMode = !readMode;

    this.props.changeMode(id, newMode);
  }

  render() {
    return (
      <div>
        <i
          className="fas fa-pencil-alt"
          onClick={() => this.changeMode(this.props.id, this.props.readMode)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { changeMode }
)(ChangeMode);
