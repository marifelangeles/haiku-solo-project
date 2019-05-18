import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';


class Definition extends Component {
    
    // check if server-side request has found a word with a definition
    getDefinition = () => {
        const results = this.props.wordInfo.results;
        if (results && results[0] && results[0].definition) {
            return results[0].definition;
        } 
    }

    render() {
        return (
            <Typography
                variant="h6" gutterBottom
                align="center"
            >
                {this.getDefinition()}
            </Typography>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Definition);
