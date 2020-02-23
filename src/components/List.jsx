import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/postActions';
import Table from './Table';
import AddNewItem from './AddNewItem'

class List extends Component {
  state = {};

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <AddNewItem title="" />
        <Table
          title="Today"
          items={this.props.items
            .filter(item => item.date === 'today')
            .filter(item => !item.isActive)}
          readMode={this.props.readMode}
          itemEdited={this.props.itemEdited}
        />
        <Table
          title="Future"
          items={this.props.items
            .filter(item => item.date === 'future')
            .filter(item => !item.isActive)}
          readMode={this.props.readMode}
          itemEdited={this.props.itemEdited}
        />
        <Table
          title="Done"
          items={this.props.items.filter(item => item.isActive)}
          readMode={this.props.readMode}
          itemEdited={this.props.itemEdited}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.list.items,
  readMode: state.list.readMode,
  itemEdited: state.list.itemEdited
});

export default connect(
  mapStateToProps,
  { fetchItems }
)(List);
