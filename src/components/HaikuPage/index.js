import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';
import NextButton from './NextButton';



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

    
    render() {

        return (
            <div>
                <h2>{this.props.wordInfo.word}</h2>

                {/* <p>haiku reducer: {JSON.stringify(this.props.haiku)}</p>
                <p>userReducer: {JSON.stringify(this.props.user)}</p> */}

                <Line1 getMatch={this.getMatch}/>
                <Line2 getMatch={this.getMatch}/>
                <Line3 getMatch={this.getMatch}/>
                <NextButton />
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuPage);