import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';



class HaikuPage extends Component {
    
    state = {
        line1Match: false,
        line2Match: false,
        line3Match: false,

    }

    getMatch = (lineMatch) => (word, input) => {
        console.log('word:', word, 'input:', input);
        let index = input.indexOf(word);
        console.log('index', index);
        if (index !== -1) {
            console.log('match!');
            this.setState({
                [lineMatch]: true
            })
        } else {
            this.setState({
                [lineMatch]: false
            })
        }
    }
    
    render() {

        return (
            <div>
                <h2>{this.props.wordInfo.word}</h2>

                <p>reducer: {JSON.stringify(this.props.haiku)}</p>
                <p>index state: {JSON.stringify(this.state)}</p>

                <Line1 getMatch={this.getMatch}/>
                <Line2 getMatch={this.getMatch}/>
                <Line3 getMatch={this.getMatch}/>
                <div>
                    <button
                        // onClick={this.handleClick}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuPage);