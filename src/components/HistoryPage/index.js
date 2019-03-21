import React, { Component } from 'react';
import { connect } from 'react-redux';




class HistoryPage extends Component {

    render() {

        return (
            <div>
                <h2>My Haikus</h2>

                <ul>
                    
                    <li>
                        <div>
                            <h3>Word</h3>
                            <h4>Date</h4>
                            <div>
                                <p>line1</p>
                                <p>line2</p>
                                <p>line3</p>
                            </div>
                            <button>Delete</button>
                        </div>
                    </li>
                </ul>


            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HistoryPage);