import React, { Component } from "react";

class Index extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        alt={this.props.gif.images.downsized.url}
                        src={this.props.gif.images.downsized.url}
                    />
                </div>
            </div>
        );
    }
}

export default Index;