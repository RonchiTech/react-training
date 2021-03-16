import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';

import useVideos from './hooks/useVideos';

import './App.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('dogs');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={(e) => search(e)} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
              //equals to
              // onVideoSelect={(e) => setSelectedVideo(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
