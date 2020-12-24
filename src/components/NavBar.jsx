import React, { Component } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Switch,
    Input,
} from '@material-ui/core';
import styles from "../styles/NavBarStyles"
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

class NavBar extends Component {
	state = {};
	render() {
        const {classes}= this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>French</span>
                        </IconButton>
                        <Typography className={classes.title} variant="h6">
                            App Title
                        </Typography>
                        <Switch />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}/>
                        </div>
                    </Toolbar>
                </AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(NavBar);