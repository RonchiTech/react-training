import React from 'react';
import './VideoItems.scss';
const VideoItem = ({
  vid: {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
    },
  },
  vid,
  onVideoSelect,
}) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(vid)}>
      <img className="ui image" src={url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
