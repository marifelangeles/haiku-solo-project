import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class NextButton extends Component {

    activateButton = () => {
        console.log('in activateButton');
        const line1Count = this.props.haiku.count1;
        const line2Count = this.props.haiku.count2;
        const line3Count = this.props.haiku.count3;
        console.log(line1Count, line2Count, line3Count);
        const line1Match = this.props.haiku.line1Match;
        const line2Match = this.props.haiku.line2Match;
        const line3Match = this.props.haiku.line3Match;
        console.log(line1Match, line2Match, line3Match);

        // activate next button if...
        // lines meet required syllable count
        if (line1Count === 5 && line2Count === 7 && line3Count === 5) {
            console.log('ok to go!');
            // word is used in input fields
            if (line1Match || line2Match || line3Match) {
                return <button onClick={this.handleClick}>Done</button>
            }
        } else {
            return <button disabled>Done</button>
        }
    }

    handleClick = () => {
        console.log('in handleClick');
        
        // if user is not registered, go to register page and create an account

        // if user has an account, prompt user to login to save haiku

        // when done is clicked...
        // save data in database
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
        // direct user to history page
        this.props.history.push('/history');
    }

    render() {

        return (
                <div>
                    {this.activateButton()}
                </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(NextButton));