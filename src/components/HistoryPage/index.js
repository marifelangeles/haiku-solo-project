import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class HistoryPage extends Component {

    componentDidMount() {
        this.getHaikuList();
    }

    // get updated haiku list from database
    getHaikuList = () => {
        console.log('in getHaikuList');
        this.props.dispatch({ type: 'GET_HAIKU'});
    }

    // delete selected haiku from database
    handleDeleteClick = (id) => {
        console.log('in handleDeleteClick', id);
        this.props.dispatch({
            type: 'DELETE_HAIKU',
            payload: id
        })
    }

    render() {
            
        return (
            <>
                <Typography variant="h5" gutterBottom>My Haikus</Typography>
                {/* {JSON.stringify(this.props.haikuList)} */}
                <Grid
                    container
                    alignItems="center"
                    spacing={16}
                >
                    {this.props.haikuList.map(haiku =>
                        <Grid item xs={12} sm={6} md={4} lg={3} key={haiku.id}>
                            <Card>
                                {/* <CardHeader 
                                    title={haiku.word}
                                    // subheader={haiku.date}
                                /> */}
                                <div className="bg-card">
                                    <CardContent>
                                        <p className="haiku-text">{haiku.line1}</p>
                                        <p className="haiku-text">{haiku.line2}</p>
                                        <p className="haiku-text">{haiku.line3}</p>
                                    </CardContent>
                                </div>
                                <CardActions>
                                    <IconButton 
                                        aria-label="Delete"
                                        onClick={() => this.handleDeleteClick(haiku.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HistoryPage);