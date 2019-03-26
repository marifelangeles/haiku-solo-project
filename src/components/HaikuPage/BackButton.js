import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



class BackButton extends Component {

    render() {
        return (
            <div>
                <Button
                    variant="outlined"
                    onClick={this.handleBackButton}
                    color="primary"
                >
                    Back
            </Button>
            </div>

        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(BackButton));