import React, { Component } from 'react';
import { connect } from 'react-redux';




class HistoryPage extends Component {

    render() {

        return (
            <div>
                History Page
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HistoryPage);