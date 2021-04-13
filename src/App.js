import './App.css';
import React, { Component } from "react";
import SearchBar from "./components/searchbar/";
import GifList from "./components/gifList/";
import Header from "./components/header/";
import Random from "./components/random/";
import request from 'superagent';

class App extends Component {
    state = { term: "", gifs: [], randomGif: "" };

    componentDidMount() {
        this.getGifs();
    }

    getGifs = (term, id) => {
        switch (id) {
            case 0:
                this.handleTermChange(term);
                break;
            default:
                this.trending();
        }
    };

    handleTermChange = (term) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data, randomGif: ""})
        });
    };

    trending = () => {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data, randomGif: "" })
        });
    };

    random = () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

        request.get(url, (err, res) => {
            this.setState({ gifs: [], randomGif: res.body.data.images.downsized.url})
        });
    };

  render() {

    return (
        <div className="jumbotron">
            <Header noGifs={this.state.gifs.length} noRandomGif={this.state.randomGif.length}/>
          <SearchBar
              getGifs={this.getGifs}
          />
          <Random random={this.random}/>
          <GifList gifs={this.state.gifs} randomGif={this.state.randomGif} />
        </div>
    );
  }
}

export default App;
