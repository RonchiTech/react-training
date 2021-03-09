import React, { Component } from 'react';
import { getSeason, seasonConfig } from './config';
import 'semantic-ui-css/semantic.min.css';
import './SeasonDisplay.css';
import Spinner from './Spinner';
class SeasonDisplay extends Component {
  renderContent() {
    const { latitude, loader, error } = this.props;
    const season = getSeason(latitude, new Date().getMonth());

    const { text, iconName } = seasonConfig[season];

    return loader ? (
      <Spinner loadingMessage="Please accept location request" />
    ) : error ? (
      { error }
    ) : (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1 className="season-name">{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
  render() {
    return <div className="container">{this.renderContent()}  </div>;
  }
}
export default SeasonDisplay;
