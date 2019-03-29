import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SampleHaiku from './SampleHaiku';
import WriteHaikuButton from './WriteHaikuButton';
import LoginButton from './LoginButton';
import Grid from '@material-ui/core/Grid';



class WelcomePage extends Component {

    

    // handleNewWord = () => {
    //     console.log('in handleNewWord');
    //     // when new word is clicked, display random word
    //     this.props.dispatch({ type: 'GET_WORD_INFO' })

    // }

    


   
    render() {
        // if (this.state.isLoading) {
        //     return <div>Loading...</div>
        // }
        return (
            <>
                
                <Grid 
                    container
                    justify="center"
                >
                    <Grid item>
                        <SampleHaiku />
                    </Grid>
                </Grid>

                <Grid 
                    container
                    spacing={24}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <WriteHaikuButton />
                    </Grid>
                    <Grid item>
                        <LoginButton />
                    </Grid>
                </Grid>

            </>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(WelcomePage));