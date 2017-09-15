import React, {Component} from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    onInputChange = (term) => {
        this.setState({term})
        this.props.onSearchChange(term)
    };

    render() {
        return (
            <div className="search-bar">
                <input type="text"
                       value={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
};