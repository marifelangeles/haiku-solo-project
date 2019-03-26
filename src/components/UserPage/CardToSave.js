import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class CardToSave extends Component {

    handleSaveHaiku = () => {
        this.props.dispatch({
        type: 'POST_HAIKU',
        payload: {
          id: this.props.user.id,
          word: this.props.wordInfo.word,
          line1: this.props.haiku.line1,
          line2: this.props.haiku.line2,
          line3: this.props.haiku.line3,
        }
      });
        // clear input fields
        this.props.dispatch({
            type: 'RESET_HAIKU',
            payload: {
                line1: '',
                line2: '',
                line3: '',
                line1Match: false,
                line2Match: false,
                line3Match: false,
            }
        })
    }



    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.wordInfo.word}
                    // subheader={haiku.date}
                />
                <CardContent>
                    <Typography variant="body1" gutterBottom>{this.props.haiku.line1}</Typography>
                    <Typography variant="body1" gutterBottom>{this.props.haiku.line2}</Typography>
                    <Typography variant="body1" gutterBottom>{this.props.haiku.line3}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.handleWriteHaiku}>Write a Haiku</Button>
                    <Button size="small" onClick={this.handleSaveHaiku}>Save Haiku</Button>
                </CardActions>
            </Card>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(CardToSave));