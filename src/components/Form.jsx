import React, { useContext } from 'react';
import {
	Avatar,
	Button,
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
import { LanguageContext } from '../contexts/LanguageContext';

const words = {
	english: {
		signIn: 'Sign In',
		email: 'Email',
		password: 'Password',
		remember: 'Remember Me',
	},
	french: {
		signIn: 'Se connecter',
		email: 'Adresse électronique',
		password: 'Mot de passe',
		remember: 'Souviens-toi de moi',
	},
	spanish: {
		signIn: 'Registrarse',
		email: 'dirección de correo electrónico',
		password: 'Contraseña',
		remember: 'Recuérdame',
	},
};

const Form = (props) => {
	const { language, changeLanguage } = useContext(LanguageContext);
	const { classes } = props;
	const { signIn, email, password, remember } = words[language];
	console.log(language)
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOpenOutlined />
				</Avatar>
				<Typography variant='h5'>{signIn}</Typography>
				<Select value={language} onChange={changeLanguage}>
					<MenuItem value='english'>English</MenuItem>
					<MenuItem value='spanish'>Spanish</MenuItem>
					<MenuItem value='french'>French</MenuItem>
				</Select>
				<form className={classes.form} action=''>
					<FormControl margin='normal' required fullWidth>
						<InputLabel htmlFor='email'>{email}</InputLabel>
						<Input id='email' name='email' autoFocus />
					</FormControl>
					<FormControl margin='normal' required fullWidth>
						<InputLabel htmlFor='password'>{password}</InputLabel>
						<Input id='password' name='password' autoFocus />
					</FormControl>
					<FormControlLabel
						control={<Checkbox color='primary' />}
						label={remember}
					/>
					<Button
						variant='contained'
						type='submit'
						fullWidth
						color='primary'
						className={classes.submit}
					>
						{signIn}
					</Button>
				</form>
			</Paper>
		</main>
	);
};


export default withStyles(styles)(Form);
