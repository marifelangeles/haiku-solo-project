import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';



class HaikuPage extends Component {
    
    
    getMatch = (lineMatch) => (word, input) => {
        console.log('word:', word, 'input:', input);

        // check if word is used in input fields
        let index = input.indexOf(word);
        console.log('index', index);
        if (index !== -1) {
            console.log('match!');
            this.props.dispatch({
                type: 'SET_HAIKU',
                payload: true,
                propertyName: [lineMatch]
            })
        } else {
            this.props.dispatch({
                type: 'SET_HAIKU',
                payload: false,
                propertyName: [lineMatch]
            })
        }
    }

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
                <h2>{this.props.wordInfo.word}</h2>

                <p>haiku reducer: {JSON.stringify(this.props.haiku)}</p>
                {/* <p>index state: {JSON.stringify(this.state)}</p> */}

                <Line1 getMatch={this.getMatch}/>
                <Line2 getMatch={this.getMatch}/>
                <Line3 getMatch={this.getMatch}/>
                <div>
                    {this.activateButton()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuPage);