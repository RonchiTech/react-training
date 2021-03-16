import React from 'react';
import VideoItem from './VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoResults = videos.map((vid) => (
    <VideoItem key={vid.id.videoId} vid={vid} onVideoSelect={onVideoSelect} />
  ));
  return <div className="ui relaxed divided list">{videoResults}</div>;
};
export default VideoList;
