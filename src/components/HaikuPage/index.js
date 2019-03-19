import React, { Component } from 'react';
import { connect } from 'react-redux';


class HaikuPage extends Component {

    state = {
        line_1: '',
        line_2: '',
        line_3: '',
    }

    handleChange = (line) => (event) => {
        console.log('in handle change');
        this.setState({
            [line]: event.target.value
        })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <h2>Intuitive</h2>
                <div>
                    <input 
                        type="text" 
                        value={this.state.line_1}
                        onChange={this.handleChange('line_1')}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={this.state.line_2}
                        onChange={this.handleChange('line_2')}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={this.state.line_3}
                        onChange={this.handleChange('line_3')}
                    />
                </div>
                <div>
                    <button>Next</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HaikuPage);