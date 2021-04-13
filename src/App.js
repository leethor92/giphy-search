import './App.css';
import React, { Component } from "react";
import SearchBar from "./components/searchbar/";
import GifList from "./components/gifList/";
import Header from "./components/header/";
import request from 'superagent';

class App extends Component {
    state = { term: "", gifs: [] };

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
            this.setState({ gifs: res.body.data })
        });
    };

    trending = () => {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    };

  render() {

    return (
        <div className="jumbotron">
            <Header noGifs={this.state.gifs.length} />
          <SearchBar
              getGifs={this.getGifs}
          />
          <GifList gifs={this.state.gifs} />
        </div>
    );
  }
}

export default App;
