import React, { Component } from 'react';
import { connect } from 'react-redux';




class HaikuList extends Component {

    render() {

        return (
            <div>
                HaikuList
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuList);