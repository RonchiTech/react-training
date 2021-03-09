import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import './App.css';

class App extends Component {
  state = {
    enteredValue: [],
  };
  onSearchSubmit(value) {
    this.setState({
      enteredValue: [...this.state.enteredValue, value],
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onFormSubmit={(value) => this.onSearchSubmit(value)} />
        {this.state.enteredValue.map((val) => {
          return <li>{val}</li>;
        })}
      </div>
    );
  }
}

export default App;
