import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.term}
              type="text"
              placeholder="Type something"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
