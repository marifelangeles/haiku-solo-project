import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';




class NewWordButton extends Component {

    handleNewWord = () => {
        // when new word is clicked, fetch random word
        this.props.dispatch({ type: 'GET_WORD_INFO' })
    }

    render() {
        return (
            <Button
                variant="outlined"
                onClick={this.handleNewWord}
                color="primary"
            >
                New Word
            </Button>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(NewWordButton);
