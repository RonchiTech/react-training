import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail'

import youtube from './apis/youtube';

import './App.css';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount(){
    this.onFormSubmit('shih tzu')
  }
  async onFormSubmit(search) {
    if (!search) {
      return;
    }
    const response = await youtube.get('/search', {
      params: {
        q: search,
      },
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }
  onVideoSelect(video) {
    this.setState({ selectedVideo: video,  });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={(e) => this.onFormSubmit(e)} />
        <div className="ui grid">
          <div className="ui row">
            <div className='ten wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='six wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={(e) => this.onVideoSelect(e)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
