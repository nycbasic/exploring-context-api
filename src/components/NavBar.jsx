import React, { useContext } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Switch,
} from '@material-ui/core';
import styles from '../styles/NavBarStyles';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const content = {
	english: {
		search: 'Search',
	},
	french: {
		search: 'Chercher',
	},
	spanish: {
		search: 'Buscar',
	},
};

const NavBar = (props) => {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const { language } = useContext(LanguageContext);
	const { classes } = props;
	const { search } = content[language];

	return (
		<div className={classes.root}>
			<AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
				<Toolbar>
					<IconButton className={classes.menuButton} color='inherit'>
						<span></span>
					</IconButton>
					<Typography className={classes.title} variant='h6'>
						App Title
					</Typography>
					<Switch onChange={toggleTheme} />
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={`${search}...`}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withStyles(styles)(NavBar);
