import React, { Component } from 'react';
import { connect } from 'react-redux';


class Line1 extends Component {

    handleChange = (event) => {
        console.log('in handle change');
        // set haiku lines in haikuReducer
        this.props.dispatch({
            type: 'SET_HAIKU_LINE',
            payload: event.target.value,
            propertyName: 'line_1'
        })
    }


    render() {
        return (
            <div>
                <p>{JSON.stringify(this.props.haikuLine.line_1)}</p>
                <input
                    type="text"
                    value={this.props.haikuReducer}
                    onChange={this.handleChange}
                />
                <p>0/5</p>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Line1);