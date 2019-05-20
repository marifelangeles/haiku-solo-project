import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './userPage.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';



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
                date: this.getCurrentDate(),

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
        });
    }

    getCurrentDate = () => {
        console.log('in setDate');

        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        console.log('in getCurrentDate', date, month, year);
        // return `${year}-${month}-${date}`;
        return `${year}-${month}-${date}`;

    }

    handleWriteHaiku = () => {
        // get new word
        this.props.dispatch({ type: 'GET_WORD_INFO' });
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
        });
        // go to word page
        // this.props.history.push('/word');

    }


    render() {
        return (
            <Card>
                {/* <CardHeader
                    title={this.props.wordInfo.word}
                /> */}
                <div className="bg-card">
                    <CardContent>
                        <p className="haiku-text">{this.props.haiku.line1}</p>
                        <p className="haiku-text">{this.props.haiku.line2}</p>
                        <p className="haiku-text">{this.props.haiku.line3}</p>
                    </CardContent>
                </div>
                <CardActions>
                    <Button size="small" onClick={this.handleWriteHaiku}>Delete</Button>
                    <Button size="small" onClick={this.handleSaveHaiku}>Save</Button>
                </CardActions>
            </Card>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(CardToSave));