import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';




class SampleHaiku extends Component {

    render() {
        return (
            <div style={{ marginTop: '4rem', marginBottom: '10rem', padding: '1rem'}}>
                <Typography variant="h6" gutterBottom>Relax, let it go</Typography>
                <Typography variant="h6" gutterBottom>Let creativity flow</Typography>
                <Typography variant="h6" gutterBottom>Start with a word and ... </Typography>
            </div>
        );
    }
}



export default connect()(SampleHaiku);