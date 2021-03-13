import React from 'react';
import VideoItem from './VideoItem/VideoItem';

const VideoList = ({ videos }) => {
  const videoResults = videos.map((vid) => (
    <VideoItem key={vid.id.videoId} vid={vid} />
  ));
  return <div>{videoResults}</div>;
};
export default VideoList;
