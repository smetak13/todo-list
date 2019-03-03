import React, { Component } from 'react';
import Checkbox from './Checkbox';
import DeleteItem from './DeleteItem';
import EditItem from './EditItem';
import ChangeMode from './ChangeMode';
import ChangeDate from './ChangeDate';
import AddNewItem from './AddNewItem';

class Table extends Component {
  state = {
    id: null,
    value: '',
    isActive: false,
    date: ''
  };

  itemCrossedClass(active) {
    if (active) return { textDecoration: 'line-through' };
  }

  render() {
    if (this.props.items.length === 0) {
      return null;
    } else {
      return (
        <div className="table">
          {this.props.title === 'Today' ? (
            <AddNewItem title={this.props.title} />
          ) : (
            <h4 className="date-title">{this.props.title}</h4>
          )}

          {this.props.items.map(item => (
            <div className="row" key={item._id}>
              <div className="col-1">
                <Checkbox item={item} isActive={item.isActive} />
              </div>
              <div className="col-7 list-item">
                {!this.props.readMode && this.props.itemEdited === item._id ? (
                  <EditItem item={item} />
                ) : (
                  <span style={this.itemCrossedClass(item.isActive)}>
                    {item.value}
                  </span>
                )}
              </div>
              <div className="col-2 change-date">
                {!item.isActive ? <ChangeDate item={item} /> : <span />}
              </div>
              <div className="col-1 edit">
                <ChangeMode id={item._id} readMode={this.props.readMode} />
              </div>
              <div className="col-1 delete">
                <DeleteItem id={item._id} />
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Table;
