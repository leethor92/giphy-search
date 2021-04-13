import React, { Component } from "react";

class Index extends Component {
    render() {
        let gif = this.props.gif.id;
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        className="card-img-tag center "
                        alt={gif}
                        src={gif}
                    />
                </div>
            </div>
        );
    }
}

export default Index;