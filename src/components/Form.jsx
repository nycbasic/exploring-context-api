import React, { Component } from 'react';
import {
	Avatar,
	Button,
	CssBaseline,
	FormControl,
	FormControlLabel,
	Checkbox,
	Input,
	InputLabel,
	Paper,
	Typography,
	MenuItem,
	Select,
} from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/FormStyles';

class Form extends Component {
	render() {
		const { classes } = this.props;
		return (
			<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOpenOutlined />
					</Avatar>
					<Typography variant='h5'>Sign In</Typography>
					<Select value="english">
						<MenuItem value="english">English</MenuItem>
						<MenuItem value="spanish">Spanish</MenuItem>
						<MenuItem value="french">French</MenuItem>
					</Select>
					<form className={classes.form} action=''>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='email'>Email</InputLabel>
							<Input id='email' name='email' autoFocus />
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='password'>Password</InputLabel>
							<Input id='password' name='password' autoFocus />
						</FormControl>
						<FormControlLabel
							control={<Checkbox color='primary' />}
							label='Remember me'
						/>
						<Button
							variant='contained'
							type='submit'
							fullWidth
							color='primary'
							className={classes.submit}
						>
							Sign In
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}

export default withStyles(styles)(Form);
