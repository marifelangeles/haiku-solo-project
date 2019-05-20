import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import '../App/App.css';


class Word extends Component {
    
    // display selected random word
    // show word as gray if not yet used
    // show word as blue if used in any of the line inputs
    showSelectedWord = () => {
        console.log('confirmWord hit');
        const line1Match = this.props.haiku.line1Match;
        const line2Match = this.props.haiku.line2Match;
        const line3Match = this.props.haiku.line3Match;
        console.log(line1Match, line2Match, line3Match);
        
        // if word is used, display word in blue color
        // else, display in gray
        if (line1Match || line2Match || line3Match) {
            console.log('word is used');
            return (
                <Typography variant="h4"
                    gutterBottom
                    align="center"
                    style={{ color: 'orange' }}
                    className="used-word"
                >
                    {this.props.wordInfo.word}

                </Typography>
            );
        } else {
            return (
                <Typography variant="h4"
                    gutterBottom
                    align="center"
                    style={{color: 'gray'}}
                    className="unused-word"
                >
                    {this.props.wordInfo.word}

                </Typography>
            );
        }
        
    }

    render() {

        return (
                <Grid item>
                    {this.showSelectedWord()}
                </Grid>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Word);