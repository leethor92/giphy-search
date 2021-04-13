import React, {Component} from 'react';

export default class Index extends Component {
    handleChange = (e, value) => {
        e.preventDefault();
        this.props.onTermChange(value);
    };

    handleTextChange = e => {
        this.handleChange(e, e.target.value);
    };
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
                                onChange={this.handleTextChange}
                            />
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}