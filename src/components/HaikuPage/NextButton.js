import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



class NextButton extends Component {

    // change next button according to login status
    // this will allow users to create a haiku without an account or before logging in
    showButton = () => {
        const line1Count = this.props.haiku.count1;
        const line2Count = this.props.haiku.count2;
        const line3Count = this.props.haiku.count3;
        console.log(line1Count, line2Count, line3Count);
        const line1Match = this.props.haiku.line1Match;
        const line2Match = this.props.haiku.line2Match;
        const line3Match = this.props.haiku.line3Match;
        console.log(line1Match, line2Match, line3Match);

        // if not logged in
        if (!this.props.user.id) {
            // and if haiku meets requirements
            if (line1Count === 5 && line2Count === 7 && line3Count === 5) {
                console.log('lines meet syllables');
                if (line1Match || line2Match || line3Match) {
                    // show active log in to save
                    return (
                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.handleLoginSaveClick}
                        >
                            Log In to Save Haiku
                        </Button>
                    );
                } 
    
            } else {
                // but if haiku doesn't meet requirements
                // show disabled log in to save
                return (
                    <Button
                        disabled
                        variant="outlined"
                        color="primary"
                        onClick={this.handleLoginSaveClick}
                    >
                        Log In to Save Haiku
                            </Button>
                );
            }
            
        } else if (this.props.user.id) {
            // if logged in 
            // and if haiku meets all requirements
            if (line1Count === 5 && line2Count === 7 && line3Count === 5) {
                console.log('lines meet syllables');
                if (line1Match || line2Match || line3Match) {
                    // show active log in to save
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
            } else {
                // but if haiku doesn't meet requirements
                // show disabled log in to save
                return (
                    <Button
                        disabled
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

    showLogInToSave = () => {
        const line1Count = this.props.haiku.count1;
        const line2Count = this.props.haiku.count2;
        const line3Count = this.props.haiku.count3;
        const line1Match = this.props.haiku.line1Match;
        const line2Match = this.props.haiku.line2Match;
        const line3Match = this.props.haiku.line3Match;

        // if user is not logged in and
        // if haiku meets requirements
        if ((line1Count === 5 && line2Count === 7 && line3Count === 5) && (line1Match || line2Match || line3Match)) {
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
            // but if haiku doesn't meet requirements
            // show disabled log in to save
            return (
                <Button
                    disabled
                    variant="outlined"
                    color="primary"
                    onClick={this.handleLoginSaveClick}
                >
                    Log In to Save Haiku
                        </Button>
            );
        }
    }

    showSaveHaiku = () => {
        const line1Count = this.props.haiku.count1;
        const line2Count = this.props.haiku.count2;
        const line3Count = this.props.haiku.count3;
        const line1Match = this.props.haiku.line1Match;
        const line2Match = this.props.haiku.line2Match;
        const line3Match = this.props.haiku.line3Match;
        // if logged in 
        // and if haiku meets all requirements
        if ( (line1Count === 5 && line2Count === 7 && line3Count === 5) && (line1Match || line2Match || line3Match) ) {
                return (
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.handleSaveHaikuClick}
                    >
                        Save Haiku
                        </Button>
                );
            
        } else {
            // but if haiku doesn't meet requirements
            // show disabled log in to save
            return (
                <Button
                    disabled
                    variant="outlined"
                    color="primary"
                    onClick={this.handleSaveHaikuClick}
                >
                    Save Haiku
                    </Button>
            );
        }
    }

    // direct users to login page without saving haiku
    // users will see haiku to be saved or deleted if created before log in
    handleLoginSaveClick = () => {
        console.log('handleLoginSaveClick hit');
        this.props.history.push('/home');
    }

    // if user is logged in, allow users to immediately save haiku before going to user home page
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
        })
        // direct user to user page
        this.props.history.push('/home');
    }

    getCurrentDate = () => {
        console.log('in setDate');
        
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        console.log('in getCurrentDate', date, month, year);
        return `${year}-${month}-${date}`;
    }
    

    render() {
        return (
                <div>
                {/* {this.showButton()} */}
                {this.props.user.id ? this.showSaveHaiku() : this.showLogInToSave()}
                </div>
            
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(withRouter(NextButton));