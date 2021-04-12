import React, { Component } from "react";

class Index extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img
                        className="card-img-tag center "
                        alt={this.props.gif.id}
                        src={this.props.gif.id}
                    />
                </div>
            </div>
        );
    }
}

export default Index;