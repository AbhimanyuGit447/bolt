import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from "./ImageList";


class App extends React.Component {

  state = {images : []};

 onSearchSubmit = async (term) => {
     const response = await unsplash.get('/search/photos', {
      params: {
          query: term,
          per_page: 1000,
      },
        
    });
    this.setState({ images : response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images} />
        <h1> Type "Cars" and Press Enter after search term</h1>
      </div>
      
    );
  }
}

export default App;
