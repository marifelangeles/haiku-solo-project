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
    
    render() {

        return (
            <div>
                <h2>{this.props.wordInfo.word}</h2>

                <p>reducer: {JSON.stringify(this.props.haiku.line1)}</p>

                <Line1 />
                <Line2 />
                <Line3 />
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