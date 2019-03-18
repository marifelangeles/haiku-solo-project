import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewShelfItem from './ViewShelfItem';

class ViewShelfList extends Component {
    state = {
        shelfItem: {
            description: '',
            image_url: '',
            user_id: this.props.user.id,
        },
    }

    componentDidMount() {
        this.getShelf();
    }

    getShelf = () => {
        console.log('in getShelf');
        this.props.dispatch({ type: 'GET_SHELF_INFORMATION'});
    }

    addShelfItem = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'POST_SHELF_INFORMATION', payload: this.state.shelfItem})
        this.setState({
            shelfItem: {
                description: '',
                image_url: '',
            }
        });
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            shelfItem: {
                ...this.state.shelfItem,
                [propertyName]: event.target.value,
            },
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addShelfItem}>
                    <input value={this.state.shelfItem.description} onChange={this.handleChangeFor('description')} placeholder="description"/>
                    <input value={this.state.shelfItem.image_url} onChange={this.handleChangeFor('image_url')} placeholder="image url"/>
                    <input type="submit"></input>
                </form>
                <h1>Shelf List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.shelfInfo.map(item => <ViewShelfItem item={item} key={item.id} />)}
                    </tbody>
                </table>
            </div>
        )
    };
};

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ViewShelfList);