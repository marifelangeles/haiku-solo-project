import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



class NextButton extends Component {


    handleNextButton = () => {
        console.log('go to haiku page');
        // direct user to next step -- haiku page
        this.props.history.push('/word/haiku');
    }

    render() {
        return (
            <Button
                variant="outlined"
                onClick={this.handleNextButton}
                color="primary"
            >
                Next
            </Button>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps) (withRouter(NextButton));
