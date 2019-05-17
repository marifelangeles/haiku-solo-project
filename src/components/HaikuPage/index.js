import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

// components
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';
import NextButton from './NextButton';
import Word from './Word';
import BackButton from './BackButton';



class HaikuPage extends Component {
    
    // check if selected word is used in each input field
    // update lineMatch to true / false in redux
    getMatch = (lineMatch) => (word, input) => {
        console.log('word:', word, 'input:', input);
        let index = input.indexOf(word);
        console.log('index', index);
        if (index !== -1) {
            console.log('match!');
            this.props.dispatch({
                type: 'SET_HAIKU',
                payload: true,
                propertyName: [lineMatch]
            });
            
        } else {
            this.props.dispatch({
                type: 'SET_HAIKU',
                payload: false,
                propertyName: [lineMatch]
            });
            
        }
    };

    // guide users with syllable counter
    // Warn users if line is over syllable limit
    countFeedback = (lineCount, limit) => {
        console.log('countFeedback hit', lineCount, limit);
        if (lineCount > limit) {
            return (
                <span style={{ color: 'red' }}>{lineCount} / {limit}</span>
            );
        } else {
            return (
                // start lineCount with 0 before user starts typing
                <span style={{ color: 'gray' }}>{lineCount ? lineCount : '0'} / {limit}</span>
            );
        }
    };

    // count syllables in a word
    // adapted from in https://stackoverflow.com/questions/5686483/how-to-compute-number-of-syllables-in-a-word-in-javascript
    new_count = (word) => {
        console.log('in new_count', word);
        if (word) {
            word = word.toLowerCase();
            if (word.length <= 3) {
                return 1;
            }
            word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
            word = word.replace(/^y/, '');
            if (!word.match(/[aeiouy]{1,2}/g)) {
                return `Sorry, I don't understand`;
            } else {
                return word.match(/[aeiouy]{1,2}/g).length;
            }
        }
        return 0;
    };

    
    render() {
        
        return (
            <Grid 
                container
                spacing={16}
                direction="column"
                justify="center"
                alignItems="center"
                style={{
                    marginTop: '3rem',
                    marginBottom: '3rem',

                }}
            >
                <Grid item>
                    <Word />
                </Grid>
                
                {/* <p>haiku reducer: {JSON.stringify(this.props.haiku)}</p> */}
                {/* <p>userReducer: {JSON.stringify(this.props.user)}</p> */}
                <Grid item>
                    <Line1 getMatch={this.getMatch} countFeedback={this.countFeedback} new_count={this.new_count}/>
                </Grid>
                <Grid item>
                    <Line2 getMatch={this.getMatch} countFeedback={this.countFeedback} new_count={this.new_count}/>
                </Grid>
                <Grid item>
                    <Line3 getMatch={this.getMatch} countFeedback={this.countFeedback} new_count={this.new_count}/>
                </Grid>
                
                <Grid item style={{marginTop: '3rem'}}>
                    <Grid
                        container
                        spacing={24}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <BackButton />
                        </Grid>
                        <Grid item>
                            <NextButton />
                        </Grid>
                    </Grid>
                    
                    
                </Grid>
                
            </Grid>
        );
    }
}




export default connect()(HaikuPage);