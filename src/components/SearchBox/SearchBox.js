import React, { Component } from 'react';
import { findMovies } from '../../redux/action';
import { connect } from 'react-redux';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }

    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value.trim() });
    }

    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={() => this.props.findMovies(searchLine)}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findMovies: (searchLine) => {
            dispatch(findMovies(searchLine))
        }
    }
}
 
export default connect(undefined, mapDispatchToProps)(SearchBox);