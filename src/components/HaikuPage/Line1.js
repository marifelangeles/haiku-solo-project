import React, { Component } from 'react';
import { connect } from 'react-redux';


class Line1 extends Component {

    state = {
        line_1: '',
        count: 0,
    }

    handleChange = (event) => {
        console.log('in handle change', event.target.value );
        // get syllable count across a line
        console.log('get line count', this.new_count(this.state.line_1));
        this.setState({
            line_1: event.target.value,
            count: this.new_count(this.state.line_1)
        });
    }

    // count syllables in a word
    new_count = (word) => {
        word = word.toLowerCase();
        if (word.length <= 3) { return 1; }
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        return word.match(/[aeiouy]{1,2}/g).length;
    }


    render() {

        return (
            <div>
                <p>{JSON.stringify(this.state)}</p>
                <input
                    type="text"
                    value={this.props.haikuReducer}
                    onChange={this.handleChange}
                />
                <p>{this.state.count}/5</p>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Line1);