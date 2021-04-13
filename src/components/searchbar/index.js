import React, {Component} from 'react';

export default class Index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col-md-12">
                        <h4 className="text-center">
                            <input
                                className="ui input search"
                                type="text"
                                placeholder="Search for GIFS!!!"
                            />
                            <button
                                type="submit"
                                value="Click to start your search">
                                Search
                            </button>

                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}