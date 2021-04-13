import React, {Component} from 'react';

export default class Index extends Component {
    handleClick = (e, value) => {
        e.preventDefault();
        this.props.rating(value);
    };

    ratn = e => {
        this.handleClick(e, e.target.value);
    };
    render() {
        return (
            <div className="container-fluid">
                <select
                    id="gender"
                    onChange={this.ratn}
                >
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG13">PG13</option>
                    <option value="R">R</option>
                </select>
            </div>
        )
    }
}