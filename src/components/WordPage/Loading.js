import React, { Component } from 'react';
import { connect } from 'react-redux';





class Loading extends Component {

    render() {
        return (
            <>
            {this.props.loadingReducer ? <div>Loading...</div> : null}
            </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(Loading);
