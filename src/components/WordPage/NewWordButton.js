import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';




class NewWordButton extends Component {

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
