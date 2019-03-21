import React, { Component } from 'react';
import { connect } from 'react-redux';
// import HaikuList from './HaikuList';




class HistoryPage extends Component {

    componentDidMount() {
        this.getHaikuList();
    }

    // get updated haiku list
    getHaikuList = () => {
        console.log('in getHaikuList');
        this.props.dispatch({ type: 'GET_HAIKU'});
    }

    handleDeleteClick = (id) => {
        console.log('in handleDeleteClick', id);
        this.props.dispatch({
            type: 'DELETE_HAIKU',
            payload: id
        })
    }

    render() {
            
        return (
            <div>
                <h2>My Haikus</h2>
                {/* {JSON.stringify(this.props.haikuList)} */}
                <ul>
                    {this.props.haikuList.map(haiku =>
                        <li key={haiku.id}>
                            <div>
                                <h3>{haiku.word}</h3>
                                <h4>{haiku.date}</h4>
                                <div>
                                    <p>{haiku.line1}</p>
                                    <p>{haiku.line2}</p>
                                    <p>{haiku.line3}</p>
                                </div>
                                <button onClick={ () => this.handleDeleteClick(haiku.id)}>Delete</button>
                            </div>
                        </li>
                    )}
                </ul>


            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HistoryPage);