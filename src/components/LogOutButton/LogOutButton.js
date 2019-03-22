import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
 

class LogOutButton extends Component {
  handleClick = () => {
    this.props.dispatch({ type: 'LOGOUT' });
    this.props.history.push('../')
  }

  render() {
    return (
        <button
          // This button shows up in multiple locations and is styled differently
          // because it's styled differently depending on where it is used, the className
          // is passed to it from it's parents through React props
          className={this.props.className}
          onClick={this.handleClick}
        >
          Log Out
      </button>      
    );
  }
}



const mapStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapStateToProps)(withRouter(LogOutButton));
