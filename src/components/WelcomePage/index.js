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
                    spacing={24}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="container"
                >
                    <Grid item>
                        <SampleHaiku />
                    </Grid>
                    <Grid item>
                        <Grid 
                            container
                            spacing={24}
                            direction="column"
                            justify="center"
                            alignItems="center"
                            className="buttons-container"
                        >
                            <Grid item>
                                <WriteHaikuButton />
                            </Grid>
                            <Grid item>
                                <LoginButton />
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>

    
                    

                {/* <div container>
                    <div id="sample-haiku">
                        <SampleHaiku />
                    </div>
                    <div id="buttons">
                        <div>   
                            <WriteHaikuButton />
                        </div>
                        <div>
                            <LoginButton />
                        </div>
                    </div>
                </div> */}
            </>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(WelcomePage));