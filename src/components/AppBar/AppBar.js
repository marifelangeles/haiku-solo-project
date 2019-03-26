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

import LogOutButton from '../LogOutButton/LogOutButton';

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
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        console.log('log out clicked');
        this.props.dispatch({ type: 'LOGOUT' });
        this.props.history.push('../')
    }

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                {/* <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                        }
                        label={auth ? 'Logout' : 'Login'}
                    />
                </FormGroup> */}
                <AppBar position="static">
                    <Toolbar>
                        {/* If user is logged in, logo directs to user page, 
                        if not, logo directs to welcome page*/}
                        {this.props.user.id ?
                            <Link to="/home" className={classes.grow} color="inherit">
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
                                        <Link to="/word">Write Haiku</Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <Link to="/home">My Haikus</Link>
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <span onClick={this.handleLogout}>Log out</span>
                                    </MenuItem>
                                </Menu>
                            </div>
                            :
                            <Link to="/welcome" className={classes.grow} color="inherit">
                                <Typography variant="h6">Login / Register</Typography>
                            </Link>
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
