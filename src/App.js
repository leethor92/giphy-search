import './App.css';
import React, { Component } from "react";
import SearchBar from "./components/searchbar/";
import GifList from "./components/gifList/";
import Header from "./components/header/";

class App extends Component {
  render() {
    const gif = {
      id: 1
    };
      const gif2 = {
          id: 2
      };
      const gif3 = {
          id: 3
      };
      const gif4 = {
          id: 4
      };
      const gif5 = {
          id: 5
      };


    const gifs = [gif, gif2, gif3, gif4, gif5];

    return (
        <div className="jumbotron">
            <Header noGifs={gifs.length} />
          <SearchBar />
          <GifList gifs={gifs} />
        </div>
    );
  }
}

export default App;
