import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';


class HistoryPage extends Component {

    componentDidMount() {
        this.getHaikuList();
    }

    // get updated haiku list
    getHaikuList = () => {
        console.log('in getHaikuList');
        this.props.dispatch({ type: 'GET_HAIKU'});
    }

    // delete selected haiku
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
                <div>
                    {this.props.haikuList.map(haiku =>
                        <Card 
                            key={haiku.id}
                            style={{maxWidth: '375px'}}
                        >
                            <CardHeader 
                                title={haiku.word}
                                subheader={haiku.date}
                            />
                            <CardContent>
                                <Typography variant="body1" gutterBottom>{haiku.line1}</Typography>
                                <Typography variant="body1" gutterBottom>{haiku.line2}</Typography>
                                <Typography variant="body1" gutterBottom>{haiku.line3}</Typography>
                            </CardContent>
                            {/* <CardContent>
                                <Typography>{haiku.word}</Typography>
                                <Typography>{haiku.date}</Typography>
                            </CardContent> */}
                                
                            <CardActions>
                                <IconButton 
                                    aria-label="Delete"
                                    onClick={() => this.handleDeleteClick(haiku.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon />
                                </IconButton>
                                {/* <Button size="small"
                                    onClick={() => this.handleDeleteClick(haiku.id)}
                                >
                                    Delete
                                </Button> */}
                            </CardActions>
                                
                        </Card>
                    )}
                </div>


            </div>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(HistoryPage);