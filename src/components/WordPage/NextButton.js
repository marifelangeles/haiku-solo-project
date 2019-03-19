import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import {withRouter} from 'react-router-dom';



class NextButton extends Component {


    handleNextButton = () => {
        console.log('go to haiku page');
        this.props.history.push('/word/haiku');
    }

    render() {
        return (
            <Grid item sm={12}>
                <Button
                    onClick={this.handleNextButton}
                    color="primary"
                >
                    Next
                </Button>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps) (withRouter(NextButton));
