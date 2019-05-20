import React, { Component } from 'react';
import { connect } from 'react-redux';
import './welcomePage.css';



class SampleHaiku extends Component {

    render() {
        return (
            <div className="css-typing" >
                {/* <Typography variant="h6" gutterBottom>Relax, let it go</Typography>
                <Typography variant="h6" gutterBottom>Let creativity flow</Typography>
                <Typography variant="h6" gutterBottom>Start with a word and ... </Typography> */}
                <p>Relax, let it go</p>
                <p>Let creativity flow</p>
                <p>Embrace the rules though</p>
            </div>
        );
    }
}



export default connect()(SampleHaiku);