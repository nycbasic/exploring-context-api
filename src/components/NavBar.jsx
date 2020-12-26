import React, { Component } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Switch,
} from '@material-ui/core';
import styles from "../styles/NavBarStyles"
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {ThemeContext } from "../contexts/ThemeContext";
import {withLanguageContext} from "../contexts/LanguageContext";

const content = {
    english: {
        search: "Search"
    },
    french: {
        search: "Chercher"
    },
    spanish: {
        search: "Buscar"
    }
}

class NavBar extends Component {
    static contextType = ThemeContext;
	render() {
        const {isDarkMode, toggleTheme } = this.context;
        const {classes}= this.props;
        const {language} = this.props.languageContext;
        const {search} = content[language];

		return (
			<div className={classes.root}>
				<AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span></span>
                        </IconButton>
                        <Typography className={classes.title} variant="h6">
                            App Title
                        </Typography>
                        <Switch onChange={toggleTheme}/>
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder={`${search}...`} classes={{
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

export default withLanguageContext(withStyles(styles)(NavBar));