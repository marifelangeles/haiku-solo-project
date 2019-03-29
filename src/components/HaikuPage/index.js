import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';
import NextButton from './NextButton';
import { Grid } from '@material-ui/core';
import Word from './Word';
import BackButton from './BackButton';



class HaikuPage extends Component {
    
    // check if word is used in input fields
    // update redux state lineMatch: true / false
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
    }

    // guide users with syllable counter. Warn users if line is over syllable limit
    countFeedback = (lineCount, limit) => {
        console.log('countFeedback hit', lineCount, limit);
        if (lineCount > limit) {
            return (
                <span style={{ color: 'red' }}>{lineCount} / {limit}</span>
            );
        } else {
            return (
                <span style={{ color: 'gray' }}>{lineCount ? lineCount : '0'} / {limit}</span>
            );
        }
    }

    
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
                
                <Word />

                {/* <p>haiku reducer: {JSON.stringify(this.props.haiku)}</p> */}
                {/* <p>userReducer: {JSON.stringify(this.props.user)}</p> */}
                <Grid item>
                    <Line1 getMatch={this.getMatch} countFeedback={this.countFeedback}/>
                </Grid>
                <Grid item>
                    <Line2 getMatch={this.getMatch} countFeedback={this.countFeedback}/>
                </Grid>
                <Grid item>
                    <Line3 getMatch={this.getMatch} countFeedback={this.countFeedback}/>
                </Grid>
                
                <Grid item style={{marginTop: '3rem'}}>
                    <Grid container spacing={16}>
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


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuPage);