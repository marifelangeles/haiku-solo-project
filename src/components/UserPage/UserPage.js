import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import './userPage.css';
import HistoryPage from '../HistoryPage';
import WriteHaikuButton from '../WelcomePage/WriteHaikuButton';
import CardToSave from './CardToSave';

import Typography from '@material-ui/core/Typography';




class UserPage extends Component {

  // allow user to see card created after logging in or creating an account
  showCardToSave = () => {
    const line1Count = this.props.haiku.count1;
    const line2Count = this.props.haiku.count2;
    const line3Count = this.props.haiku.count3;
    const line1Match = this.props.haiku.line1Match;
    const line2Match = this.props.haiku.line2Match;
    const line3Match = this.props.haiku.line3Match;
    // user created a haiku before logging in 
    // and if haiku meets all requirements
    if ((line1Count === 5 && line2Count === 7 && line3Count === 5) && 
      (line1Match || line2Match || line3Match)) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <>
      <div className="userpage-container">
        <div className="content-header">
          <div className="username">
            <Typography variant="h4" gutterBottom>
              Hi, {this.props.user.username}!
            </Typography>  
          </div>
          
          <div className="card-button">
            {/* if user is already logged in, show write haiku button at top of page*/}
            {this.showCardToSave() ? <CardToSave /> : <WriteHaikuButton />}
          </div>
        </div>

        <div className="history-container">
          <HistoryPage />
        </div>

      </div>
      </>
    );
  }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

  export default connect(mapStateToProps)(withRouter(UserPage));