import React, { Component } from 'react';
import axios from './api/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';
import './App.css';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };
  async onSearchSubmit(value) {
    if (!value) {
      return this.setState({ images: [] });
    }
    this.setState({ isLoading: true });
    const response = await axios.get('/search/photos', {
      params: { query: value },
    });
 
    this.setState({ images: response.data.results, isLoading: false });
    //Promise way
    // axios
    //   .get('https://api.unsplash.com/search/photos', {
    //     params: {
    //       query: value,
    //     },
    //     headers: {
    //       Authorization:
    //         'Client-ID zcTFLbTj8fTX5GOwbaFycet5K_tlqPI0KR50aLWk_nw',
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data.results);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  onGetUI() {
    if (this.state.isLoading) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      );
    } else {
      return <ImageList images={this.state.images} />;
    }
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <SearchBar onFormSubmit={(value) => this.onSearchSubmit(value)} />
        {this.onGetUI()}
      </div>
    );
  }
}

export default App;
