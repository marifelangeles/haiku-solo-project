import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class LoginButton extends Component {

    handleLoginClick = () => {
        console.log('in handleLoginClick');
        // go to login page
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <Button 
                    color="primary"
                    onClick={this.handleLoginClick}
                >
                    Login / Register
                </Button>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(LoginButton));