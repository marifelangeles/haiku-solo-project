import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewShelfItem extends Component {

    handleDelete = (id) => () => {
        console.log('key:', id)
        this.props.dispatch({ type: 'DELETE_SHELF_INFORMATION', payload: id})
    };

    render() {
        return (
            <tr value={this.props.item.id}>
                <td>{this.props.item.description}</td>
                <td><img src={this.props.item.image_url} height="42" width="42" /></td>
                <td><button onClick={this.handleDelete(this.props.item.id)}>Delete</button></td>
            </tr>
        )
    };
};

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ViewShelfItem);
