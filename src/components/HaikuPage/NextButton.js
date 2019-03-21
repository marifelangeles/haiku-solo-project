import React, { Component } from 'react';
import { connect } from 'react-redux';



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
                return <button>Next</button>
            }
        } else {
            return <button disabled>Next</button>
        }
        // then save word and haiku lines in database
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

export default connect(mapStateToProps)(NextButton);