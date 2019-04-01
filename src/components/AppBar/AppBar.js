import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
        // direct to user page for logged in users
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
        // direct to word page
        this.props.history.push('/word');
    }

    handleLoginRegister = () => {
        console.log('handleLoginRegister hit' );
        // direct to welcome page for not logged in users
        this.props.history.push('/home');
    }

    HaikuHome = () => {
        console.log('HaikuHome hit');
        // direct to user page for logged in users
        this.props.history.push('/home');
    }

    HaikuWelcome = () => {
        console.log('HaikuWelcome hit');
        // direct to welcome page for non logged in users
        this.props.history.push('/welcome');

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
                            <div className={classes.grow} style={{ cursor: 'grab'}}>
                                <Typography variant="h6" color="inherit">
                                    <span onClick={this.HaikuHome}>Haiku</span>
                                </Typography>
                            </div>
                            :
                            <div className={classes.grow} style={{ cursor: 'grab' }} >
                                <Typography variant="h6" color="inherit">
                                    <span onClick={this.HaikuWelcome}>Haiku</span>
                                </Typography>
                            </div>
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
                            <div style={{ cursor: 'grab'}}>
                                <Typography variant="button" color="inherit">
                                    <span onClick={this.handleLoginRegister}>Login / Register</span>
                                </Typography>
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


export default withRouter(
    withStyles(styles)(
    connect(mapStateToProps)(MenuAppBar)
));
