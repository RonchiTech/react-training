import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: '',
  };
  onInputChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.input);
  }
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
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
