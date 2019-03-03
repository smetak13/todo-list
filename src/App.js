import React, { Component } from 'react';
import './index.css';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <h1 className="main-title">TODO List</h1>
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
