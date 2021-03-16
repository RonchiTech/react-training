import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';

import youtube from './apis/youtube';

import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit('shih tzu');
  }, []);

  const onFormSubmit = async (search) => {
    if (!search) {
      return;
    }
    const response = await youtube.get('/search', {
      params: {
        q: search,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={(e) => onFormSubmit(e)} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(e) => onVideoSelect(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
