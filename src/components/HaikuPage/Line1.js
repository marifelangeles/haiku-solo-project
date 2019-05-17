import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';


class Line1 extends Component {

    handleChange = (event) => {
        console.log('in handle change', event.target.value );
        // save input to redux as user types real-time
        // this will allow users to hit back and forward button without losing their haiku
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: event.target.value,
            propertyName: "line1"
        });

        // keep a real-time count of syllables in each haiku line
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: this.props.new_count(event.target.value),
            propertyName: "count1"
        })

        // check if target word is used in haiku
        // take in event.target.value to match in sync --> otherwise match is delayed
        this.props.getMatch('line1Match')(this.props.wordInfo.word, event.target.value);

    };

    render() {
        return (
            <div>
                <TextField
                    id="line-1"
                    type="text"
                    multiline
                    rowsMax="4"
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