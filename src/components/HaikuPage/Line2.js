import React, { Component } from 'react';
import { connect } from 'react-redux';


class Line2 extends Component {

    state = {
        isMatch: false,
    }

    handleChange = (event) => {
        console.log('in handle change', event.target.value);

        //save input to redux at all times
        // allow user to see input when leaving and returning to haiku page
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: event.target.value,
            propertyName: "line2"
        });
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: this.new_count(event.target.value),
            propertyName: "count2"
        })

        // check if target word is used in haiku
        this.getMatch(this.props.wordInfo.word, this.props.haiku.line2);
    }

    // count syllables in a word
    // code found in https://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
    new_count = (word) => {
        if (word) {
            word = word.toLowerCase();
            if (word.length <= 3) { return 1; }
            word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
            word = word.replace(/^y/, '');
            return word.match(/[aeiouy]{1,2}/g).length;
        }
        return 0;
    }

    getMatch = (word, input) => {
        console.log('word:', word, 'input:', input);
        let index = input.indexOf(word);
        console.log('index', index);
        if (index !== -1) {
            console.log('match!');
            this.setState({
                isMatch: true
            })
        } else {
            this.setState({
                isMatch: false
            })
        }
    }


    render() {
        return (
            <div>
                <p>state: {JSON.stringify(this.state)}</p>

                <input
                    type="text"
                    value={this.props.haiku.line2}
                    onChange={this.handleChange}
                />
                <p>{this.props.haiku.count2 ? this.props.haiku.count2 : 0}/7</p>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Line2);