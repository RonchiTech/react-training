import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './components/SeasonDisplay';
class App extends Component {
  state = {
    latitude: null,
    isLoading: true,
    error: '',
  };

  componentDidMount() {
    console.log('Did Mount1');
    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.setState({ isLoading: true });
        console.log(coords);
        this.setState({ latitude: coords.latitude });
        this.setState({ isLoading: false });
      },
      (error) => {
        this.setState({ isLoading: true });
        console.log(error);
        this.setState({ error: error.message });
        this.setState({ isLoading: false });
      }
    );
    console.log('Did Mount2');
  }
  componentDidUpdate() {
    console.log('Did update');
  }

  render() {
    console.log('Render', Math.random());

    return this.state.error ? (
      this.state.error
    ) : (
      <SeasonDisplay
        loader={this.state.isLoading}
        latitude={this.state.latitude}
      />
    );
  }
}

export default App;
