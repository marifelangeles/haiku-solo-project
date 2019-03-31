import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css'
import Header from './Header';
import SelectedWord from './SelectedWord';
import PartOfSpeech from './PartOfSpeech';
import Pronunciation from './Pronunciation';
import Definition from './Definition';
import NewWordButton from './NewWordButton';
import NextButton from './NextButton';

import { Grid } from '@material-ui/core';





class WordPage extends Component {
   

    handleNewWord = () => {
        // when new word is clicked, fetch random word
        this.props.dispatch({ type: 'GET_WORD_INFO' })
    }

    render() {  
       
        return (
            <>
            {this.props.loadingReducer ? 
                <div className="loader">Loading...</div>
            : 
                      
            (<Grid 
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
                
                <Grid item sm={12}>
                    <Header />
                </Grid>

                <Grid item sm={12}>
                    <SelectedWord />
                </Grid>

                <Grid item sm={12}>
                    <Grid 
                        container
                        spacing={16}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item sm={6}>
                            <PartOfSpeech />
                        </Grid>
                        <Grid item sm={6}>
                            <Pronunciation />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} 
                    style={{ 
                        maxWidth: '375px', 
                        padding: '2rem',
                        marginBottom: '3rem',
                        marginTop: '2rem'
                    }}>
                    <Definition />
                </Grid>

                

                <Grid item sm={12}>
                    <Grid
                        container
                        spacing={16}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <NewWordButton handleNewWord={this.handleNewWord}/>
                        </Grid>
                        <Grid item>
                            <NextButton />
                        </Grid>
                        
                    </Grid>
                </Grid>
                    
            </Grid>
            )}
            </>
        );
                
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(WordPage);
