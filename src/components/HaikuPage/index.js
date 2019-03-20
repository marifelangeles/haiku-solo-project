import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line1 from './Line1';
import Line2 from './Line2';
import Line3 from './Line3';


class HaikuPage extends Component {

    
    render() {
        return (
            <div>
                <h2>Intuitive</h2>
                <p>reducer: {JSON.stringify(this.props.haiku)}</p>

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