import './App.css';
import React, { Component } from "react";
import SearchBar from "./components/searchbar/";
import GifList from "./components/gifList/";

class App extends Component {
  render() {
    const gif = {
      id: 1
    };

    const gifs = [gif, gif, gif, gif, gif];

    return (
        <div className="jumbotron">
          <SearchBar />
          <GifList gifs={gifs} />
        </div>
    );
  }
}

export default App;
