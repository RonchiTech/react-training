import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: '',
  };
  onInputChange(input) {
    this.setState({
      input: input.target.value,
    });
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              placeholder="Search videos..."
              value={this.state.input}
              type="text"
              onChange={(input) => {
                this.onInputChange(input);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
