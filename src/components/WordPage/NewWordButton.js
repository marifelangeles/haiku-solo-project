import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';




class NewWordButton extends Component {

    // handleNewWord = () => {
    //     console.log('in handleNewWord');
    //     // when new word is clicked, display random word
    //     this.props.dispatch({ type: 'GET_WORD_INFO'})
    //     // if (!this.props.wordInfo.word) {
    //     //     return <div>Loading...</div>;
    //     // } else {
    //     //     return 
    //     // }
    // }

    render() {
        return (
            <Button
                variant="outlined"
                onClick={this.props.handleNewWord}
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
