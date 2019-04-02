import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

// https://www.npmjs.com/package/react-share
// import {
//     FacebookShareButton,
    
// } from 'react-share';

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