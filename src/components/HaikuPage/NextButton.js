import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



class NextButton extends Component {

    showButton = () => {
        console.log('in showButton');
        const line1Count = this.props.haiku.count1;
        const line2Count = this.props.haiku.count2;
        const line3Count = this.props.haiku.count3;
        console.log(line1Count, line2Count, line3Count);
        const line1Match = this.props.haiku.line1Match;
        const line2Match = this.props.haiku.line2Match;
        const line3Match = this.props.haiku.line3Match;
        console.log(line1Match, line2Match, line3Match);


        // check if lines meet required syllable count
        if (line1Count === 5 && line2Count === 7 && line3Count === 5) {
            console.log('lines meet syllables');
            // and word is used in haiku
            if (line1Match || line2Match || line3Match) {
                console.log('word is used');
                // if user is not logged in, prompt user to login 
                if (!this.props.user.id) {
                    console.log('user is not logged in');
                    return (
                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.handleLoginSaveClick}
                        >
                            Log In to Save Haiku
                        </Button>
                    );
                } else {
                    // else save the haiku and go to userpage home
                    console.log('user is logged in');
                    return (
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={this.handleSaveHaikuClick}
                        >
                            Save Haiku
                        </Button>
                    );
                }
                
            }
        } 
    }

    handleLoginSaveClick = () => {
        console.log('handleLoginSaveClick hit');
        // direct users to login page
        this.props.history.push('/login');
    }

    handleSaveHaikuClick = () => {
        console.log('handleSaveHaikuClick hit');
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
        this.props.history.push('/home');
    }
    

    render() {
        return (
                <div>
                {this.showButton()}
                </div>
            
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(NextButton));