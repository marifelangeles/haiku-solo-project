import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';


class Share extends Component {

    

    render() {

        return (
            <>
            <IconButton aria-label="Share">
                <ShareIcon />
            </IconButton>
            </>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Share);