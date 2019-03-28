import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SampleHaiku from './SampleHaiku';
import WriteHaikuButton from './WriteHaikuButton';
import LoginButton from './LoginButton';
import Grid from '@material-ui/core/Grid';



class WelcomePage extends Component {

   
    render() {
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