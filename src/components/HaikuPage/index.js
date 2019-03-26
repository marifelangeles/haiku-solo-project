import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';
import NextButton from './NextButton';
import { Grid } from '@material-ui/core';
import Word from './Word';



class HaikuPage extends Component {
    

    getMatch = (lineMatch) => (word, input) => {
        console.log('word:', word, 'input:', input);

        // check if word is used in input fields
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
                {/* <Grid item>
                    <h2>{this.props.wordInfo.word}</h2>
                </Grid> */}
                <Word />

                {/* <p>haiku reducer: {JSON.stringify(this.props.haiku)}</p> */}
                {/* <p>userReducer: {JSON.stringify(this.props.user)}</p> */}
                <Grid item>
                    <Line1 getMatch={this.getMatch} />
                </Grid>
                <Grid item>
                    <Line2 getMatch={this.getMatch} />
                </Grid>
                <Grid item>
                    <Line3 getMatch={this.getMatch} />
                </Grid>
                
                <Grid item style={{marginTop: '3rem'}}>
                    <NextButton />
                </Grid>
                
            </Grid>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuPage);