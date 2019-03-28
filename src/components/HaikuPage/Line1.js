import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';


class Line1 extends Component {

    handleChange = (event) => {
        console.log('in handle change', event.target.value );

        // save input to redux as user type real-time
        // this will allow users to hit back button without losing their haiku
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: event.target.value,
            propertyName: "line1"
        });

        // keep a real-time count of syllables in each haiku line
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: this.new_count(event.target.value),
            propertyName: "count1"
        })

        // check if target word is used in haiku
        this.props.getMatch('line1Match')(this.props.wordInfo.word, this.props.haiku.line1);

        // allow only words 
        // give error message if user types a number --> can't count syllables in numbers yet
    }

    new_count = (word) => {
        console.log('in new_count', word);
        let match = 0;
        if (word) {
            word = word.toLowerCase();            
            if (word.length <= 3) { 
                console.log('word length', word.length);
                return 1; 
            }
            word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
            console.log('word replace line 54', word);
            
            word = word.replace(/^y/, '');
            console.log('word replace line 57', word);
            match = word.match(/[aeiouy]{1,2}/g);

            // cannot get word length if word is null -- expect users to type jjjjjj
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
                    id="line-1"
                    type="text"
                    defaultValue={this.props.haiku.line1}
                    helperText={this.props.countFeedback(this.props.haiku.count1, 5)  }
                    margin="normal"
                    fullWidth
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Line1);