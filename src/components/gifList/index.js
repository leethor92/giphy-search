import React, { Component } from "react";
import GifItem from "../gifItem/";
import './gifList.css';

export default class Index extends Component {
    render() {
        const gifCards = this.props.gifs.map(g => (
            <GifItem key={g.id} gif={g} />
        ));
        return (
            <div className="container-fluid">
                <div className="row">{gifCards}</div>
            </div>
        );
    }
}