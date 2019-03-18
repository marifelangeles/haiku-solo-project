import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';




class NewWordButton extends Component {


    handleNewWord = () => {
        console.log('in handleNewWord');
        this.props.dispatch({ type: 'GET_WORD_INFO'})
    }

    render() {
        return (
            <Grid item sm={12}>
                <Button
                    onClick={this.handleNewWord}
                    color="primary"
                >
                    New Word
                </Button>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(NewWordButton);
