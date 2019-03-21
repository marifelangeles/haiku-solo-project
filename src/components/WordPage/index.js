import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Header from './Header';
import SelectedWord from './SelectedWord';
import PartOfSpeech from './PartOfSpeech';
import Pronunciation from './Pronunciation';
import Definition from './Definition';
import NewWordButton from './NewWordButton';
import NextButton from './NextButton';



class WordPage extends Component {


    render() {
        return (
            <div>
                <Grid container spacing={8} style={{padding: "2rem"}}>
                    <Grid container>
                        <Header />
                    </Grid>
                    <Grid container>
                        <SelectedWord />
                    </Grid>
                    <Grid container spacing={16}>
                        <PartOfSpeech />
                        <Pronunciation />
                    </Grid>
                    <Grid container>
                        <Definition  />
                    </Grid>
                    <Grid container>
                        <NewWordButton  />
                        <NextButton />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(WordPage);
