import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

class SelectedWord extends Component {


    render() {
        return (
            <Typography 
                variant="h3" 
                gutterBottom 
                align="center"
                style={{color: "orange"}}
            >
                {this.props.wordInfo.word}
            </Typography >
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(SelectedWord);
