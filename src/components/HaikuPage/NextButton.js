import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



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
                return (
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.handleClick}
                    >
                        Done
                    </Button>
                )
            }
        } else {
            return (
                <Button
                    variant="outlined"
                    color="primary"
                    disabled
                    onClick={this.handleClick}
                >
                    Done
                    </Button>
            )
        }
    }

    handleClick = () => {
        console.log('in handleClick');
        
        // when done is clicked...
        
        if (!this.props.user.id) {
            // if user is not logged in, go to login page and log in
            this.props.history.push('/login');
            // then save data in database
            // this.props.dispatch({
            //     type: 'POST_HAIKU',
            //     payload: {
            //         id: this.props.user.id,
            //         word: this.props.wordInfo.word,
            //         line1: this.props.haiku.line1,
            //         line2: this.props.haiku.line2,
            //         line3: this.props.haiku.line3,
            //     }
            // });
        } else {
            // if user is logged in
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
            // if user is logged in, go to history page
            this.props.history.push('/history');
        }
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