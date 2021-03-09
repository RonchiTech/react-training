import React from 'react';

const Spinner = ({ loadingMessage }) => {
  return (
    <div
      className="ui active dimmer"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div className="ui text loader">{loadingMessage}</div>
      <p></p>
    </div>
  );
};
Spinner.defaultProps = {
  loadingMessage: 'Loading...',
};
export default Spinner;
