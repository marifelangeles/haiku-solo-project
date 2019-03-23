import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SampleHaiku from './SampleHaiku';
import WriteHaikuButton from './WriteHaikuButton';
import LoginButton from './LoginButton';
// styles
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

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(WelcomePage));