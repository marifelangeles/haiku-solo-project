import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';


class Line3 extends Component {

    handleChange = (event) => {
        console.log('in handle change', event.target.value);

        //save input to redux at all times
        // allow user to see input when leaving and returning to haiku page
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: event.target.value,
            propertyName: "line3"
        });
        this.props.dispatch({
            type: 'SET_HAIKU',
            payload: this.props.new_count(event.target.value),
            propertyName: "count3"
        })

        // check if target word is used in haiku
        this.props.getMatch('line3Match')(this.props.wordInfo.word, event.target.value);
    };

    render() {
        return (
            <div>
                <TextField
                    id="line-3"
                    type="text"
                    multiline
                    rowsMax="4"
                    defaultValue={this.props.haiku.line3}
                    helperText={this.props.countFeedback(this.props.haiku.count3, 5)}
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

export default connect(mapStateToProps)(Line3);