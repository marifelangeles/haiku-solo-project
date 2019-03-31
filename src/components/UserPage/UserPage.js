import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import '../App/App.css'
import HistoryPage from '../HistoryPage';
import WriteHaikuButton from '../WelcomePage/WriteHaikuButton';

import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardToSave from './CardToSave';



class UserPage extends Component {

  showCardToSave = () => {
    const line1Count = this.props.haiku.count1;
    const line2Count = this.props.haiku.count2;
    const line3Count = this.props.haiku.count3;
    const line1Match = this.props.haiku.line1Match;
    const line2Match = this.props.haiku.line2Match;
    const line3Match = this.props.haiku.line3Match;
    // user created a haiku before logging in 
    // and if haiku meets all requirements
    if ((line1Count === 5 && line2Count === 7 && line3Count === 5) && (line1Match || line2Match || line3Match)) {
      return <CardToSave />;
    } else {
      return <WriteHaikuButton />;
    }
  }

  render() {
    return (
      <Grid 
        container
        spacing={16}
        direction="column"
        justify="center"  
        className="user-home"      
        
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
        
        <Grid item sm={6}>
          {this.showCardToSave()}
          
        </Grid>
        
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