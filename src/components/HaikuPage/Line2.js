import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';


class Line2 extends Component {

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
        this.props.getMatch('line2Match')(this.props.wordInfo.word, this.props.haiku.line2);
    }

    // count syllables in a word
    // code found in https://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
    new_count = (word) => {
        let match = 0;

        if (word) {
            word = word.toLowerCase();
            if (word.length <= 3) { return 1; }
            word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
            word = word.replace(/^y/, '');
            match = word.match(/[aeiouy]{1,2}/g);

            // allow user to continue typing with more than 3 consecutive consonants
            if (match !== null) {
                return match.length;
            } 
        }
        return 0;
    }


    render() {
        return (
            <div>
                <TextField
                    id="line-2"
                    type="text"
                    defaultValue={this.props.haiku.line2}
                    helperText={this.props.countFeedback(this.props.haiku.count2, 7)}
                    margin="normal"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Line2);