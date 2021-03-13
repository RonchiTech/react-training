import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList'

import youtube from './apis/youtube';

import './App.css';

class App extends Component {
  state = {
    videos: [],
  };
  async onFormSubmit(search) {
    if (!search) {
      return;
    }
    const response = await youtube.get('/search', {
      params: {
        q: search,
      },
    });

    this.setState({ videos: response.data.items });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={(e) => this.onFormSubmit(e)} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
