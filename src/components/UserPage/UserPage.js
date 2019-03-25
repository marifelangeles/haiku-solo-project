import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import HistoryPage from '../HistoryPage';
import WriteHaikuButton from '../WelcomePage/WriteHaikuButton';

import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardToSave from './CardToSave';



class UserPage extends Component {

  showCardToSave = () => {
    console.log('showCardToSave hit');
    if(this.props.haiku.line3){
      return (
        <CardToSave />
      )
    } else if (!this.props.haiku.line3){
      return <WriteHaikuButton />
    }
  }

  render() {
    return (
      <Grid 
        container
        spacing={16}
        direction="column"
        justify="center"        
        
      >
        <Grid item
          style={{
            alignItems: "center"

          }}
        >
          <Typography
            id="welcome"
            variant="h4"
            gutterBottom
          >
            Hi, {this.props.user.username}!
        </Typography>
        </Grid>
        
        <Grid item>
          {this.showCardToSave()}
          
        </Grid>

        {/* <Grid item>
          
        </Grid> */}
        
        <Grid item>
          <HistoryPage />
        </Grid>

        

      </Grid>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxState) => {
    return reduxState;
}

  export default connect(mapStateToProps)(withRouter(UserPage));