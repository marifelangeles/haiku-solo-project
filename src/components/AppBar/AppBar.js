import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: 'none',
    }
};

class MenuAppBar extends React.Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        // log out and go to home
        console.log('log out menu item clicked');
        this.props.dispatch({ type: 'LOGOUT' });
        this.props.history.push('../')
    }

    handleMyHaikus = () => {
        console.log('My Haikues menu clicked');
        this.props.history.push('/home');
    }

    handleWriteHaiku = () => {
        console.log('Write Haiku menu item clicked');
        // get random word before user goes to word page
        this.props.dispatch({ type: 'GET_WORD_INFO' })
        // make sure input field in word page is cleared
        this.props.dispatch({
            type: 'RESET_HAIKU',
            payload: {
                line1: '',
                line2: '',
                line3: '',
                line1Match: false,
                line2Match: false,
                line3Match: false,
            }
        })
        // go to word page
        this.props.history.push('/word');

    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                
                <AppBar position="static">
                    <Toolbar>
                        {/* If user is logged in, logo directs to user page, 
                        if not, logo directs to welcome page*/}
                        {this.props.user.id ?
                            <Link to="/home" className={classes.grow}  color="inherit">
                                <Typography variant="h6">Haiku</Typography>
                            </Link>
                            :
                            <Link to="/welcome" className={classes.grow} color="inherit">
                                <Typography variant="h6">Haiku</Typography>
                            </Link>
                        }

                        {/* If user is logged in, show account icon with 
                        menu to write haiku, see haikus, log out*/}
                        {this.props.user.id ? 
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>
                                        <span onClick={this.handleWriteHaiku}>Write Haiku</span>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <span onClick={this.handleMyHaikus}>My Haikus</span>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <span onClick={this.handleLogout}>Log out</span>
                                    </MenuItem>
                                </Menu>
                            </div>
                            :
                            <div>
                                <Link to="/home" className={classes.grow} color="inherit">
                                    <Typography variant="button">Login / Register</Typography>
                                </Link>
                            </div>
                            
                        }
                        
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
});

// export default withStyles(styles) ( 
//     connect(mapStateToProps)(MenuAppBar) 
//     );

export default withRouter(
    withStyles(styles)(
    connect(mapStateToProps)(MenuAppBar)
));
