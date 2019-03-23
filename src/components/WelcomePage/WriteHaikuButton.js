import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



class WriteHaikuButton extends Component {

    handleWriteClick = () => {
        console.log('in handleClick');
        // get random word before user goes to word page
        this.props.dispatch({ type: 'GET_WORD_INFO' })
        // make sure input field in word page is cleared
        this.props.dispatch({
            type: 'RESET_HAIKU',
            payload: {
                line1: '',
                line2: '',
                line3: '',
                line1Match: false,
                line2Match: false,
                line3Match: false,
            }
        })
        // go to word page
        this.props.history.push('/word');

    }

    

    render() {
        return (
            <div>
                <Button 
                    variant="outlined"
                    color="primary"
                    onClick={this.handleWriteClick}
                >
                    Write a Haiku
                </Button>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(WriteHaikuButton));