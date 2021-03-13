import React from 'react';

const VideoItem = ({
  vid: {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
    },
  },
}) => {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
export default VideoItem;
