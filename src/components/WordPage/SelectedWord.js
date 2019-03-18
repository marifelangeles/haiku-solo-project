import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

class SelectedWord extends Component {


    render() {

        return (
            <Grid item sm={12}>
                <h1>{this.props.wordInfo.word}</h1>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(SelectedWord);
