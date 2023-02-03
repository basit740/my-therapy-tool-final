import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Button,
	Box,
	TextField,
	Checkbox,
	FormControlLabel,
} from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
//import {object, string} from "yup";
import { object, string, ref, boolean } from 'yup';
import Alert from '@mui/material/Alert';
//.import registerbanner from '../../images/register-banner.jpg';
import logo from '../../images/logo.png';

import classes from './Register.module.css';
import AuthContext from '../../store/auth-context.js';

const signUpInitialValues = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	password: '',
	confirmpassword: '',
};

const signInInitialValues = {
	username: '',
	password: '',
};

const SignUpIn = (props) => {
	const [signIn, setSignIn] = useState(true);
	const navigate = useNavigate();

	const [showSuccess, setShowSuccess] = useState(false);
	const [loginError, setLoginError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const authCtx = useContext(AuthContext);

	//Toggle Sign in or Sign up
	const signinHandler = (event) => {
		event.preventDefault();
		setSignIn(true);
	};

	return (
		<div className={classes['login-screen']}>
			<div className={classes['banner']}></div>

			<div className={`${classes['form-container']} ${classes['register-container']}`}>
				<div className={classes['feedback-container']}>
					{loginError === true && (
						<>
							<Alert severity='error'>Invalid User Name or Password</Alert>
						</>
					)}
				</div>
				<div className={classes['actual-content']}>
					<h1>
						<img
							src={logo}
							alt='logo'
						/>
					</h1>
					<p className={classes['subtitle']} style={{ color: 'rgb(14,66,96)' }}>
						Get More Out Of Therapy ™
					</p>

					<Box
						sx={{
							'& > :not(style)': { m: 1 },
						}}
						noValidate
						autoComplete='off'
					>
						{!signIn && (
							<>
								<Formik
									initialValues={signUpInitialValues}
									onSubmit={(values, formikHelpers) => {
										console.log(values);
										formikHelpers.resetForm();
										setIsLoading(true);
										// call to backend api
										fetch(process.env.REACT_APP_API_URL + '/auth/register', {
											method: 'POST',
											headers: {
												'Content-Type': 'application/json',
											},
											body: JSON.stringify(values),
										})
											.then((response) => {
												setIsLoading(false);
												if (response.ok) {
													return response.json();
												}
												throw new Error(response.error);
											})
											.then((data) => {
												// console.log the date

												if (data.success === true) {
													authCtx.login(data.token);
													navigate('/welcome', { replace: true });
												}
											})
											.catch((err) => {
												alert('user name or email already used');
											});
										setShowSuccess(true);
									}}
									validationSchema={object({
										firstName: string()
											.required('Please enter your first name')
											.min(2, 'First Name too short'),
										lastName: string()
											.required('Please enter your last name')
											.min(2, 'Last Name too short'),
										username: string()
											.required('Please enter your username')
											.min(4, 'username too short'),
										email: string()
											.required('Please enter your username')
											.email('Invalid Email'),
										password: string()
											.required('Please enter password')
											.min(7, 'Password should be minimum 7 characters long'),
										confirmpassword: string()
											.required('Required')
											.oneOf([ref('password'), null], 'Passwords must match'),
										terms: boolean().oneOf(
											[true],
											'Must Accept Terms and Conditions'
										),
									})}
								>
									{({ errors, isValid, touched, dirty }) => (
										<Form>
											<Field
												name='firstName'
												type='firstName'
												as={TextField}
												variant='standard'
												label='First Name'
												style={{ width: '45%' }}
												error={
													Boolean(errors.firstName) &&
													Boolean(touched.firstName)
												}
												helperText={
													Boolean(touched.firstName) && errors.firstName
												}
											></Field>
											<Field
												name='lastName'
												type='lastName'
												as={TextField}
												variant='standard'
												label='Last Name'
												style={{ width: '45%' }}
												error={
													Boolean(errors.lastName) && Boolean(touched.lastName)
												}
												helperText={
													Boolean(touched.lastName) && errors.lastName
												}
											></Field>
											<Field
												fullWidth
												name='username'
												type='username'
												as={TextField}
												variant='standard'
												label='Username'
												style={{ width: '90%' }}
												error={
													Boolean(errors.username) && Boolean(touched.username)
												}
												helperText={
													Boolean(touched.username) && errors.username
												}
											></Field>
											<Field
												fullWidth
												name='email'
												type='email'
												as={TextField}
												variant='standard'
												label='Email'
												style={{ width: '90%' }}
												error={Boolean(errors.email) && Boolean(touched.email)}
												helperText={Boolean(touched.email) && errors.email}
											></Field>
											<Field
												fullWidth
												name='password'
												type='password'
												as={TextField}
												variant='standard'
												label='Password'
												style={{ width: '90%' }}
												error={
													Boolean(errors.password) && Boolean(touched.password)
												}
												helperText={
													Boolean(touched.password) && errors.password
												}
											></Field>
											<Field
												fullWidth
												name='confirmpassword'
												type='password'
												as={TextField}
												variant='standard'
												label='Confirm Password'
												style={{ width: '90%' }}
												error={
													Boolean(errors.confirmpassword) &&
													Boolean(touched.confirmpassword)
												}
												helperText={
													Boolean(touched.confirmpassword) &&
													errors.confirmpassword
												}
											></Field>
											<Box height={14} />
											<FormControlLabel
												name='agree'
												type='checkbox'
												control={<Checkbox defaultChecked />}
												label='I Agree with Terms and Conditions'
											/>
											<Box height={14} />
											<Box
												display='flex'
												style={{ width: '90%' }}
												alignItems='center'
												justifyContent='center'
												className={classes['btn-container']}
											>
												<Button
													style={{ backgroundColor: 'black', color: 'white' }}
													type='submit'
													variant='contained'
													color='primary'
													size='large'
													className={classes['sign-up-btn']}
												>
													Sign Up
												</Button>
											</Box>
										</Form>
									)}
								</Formik>

								{showSuccess === true && (
									<>
										{/* <Alert severity='success'>
												Your Account has been created!
											</Alert> */}
									</>
								)}

								<div className={classes['signin-text']}>
									<p>
										Already have an account?{' '}
										<a href='/auth' onClick={signinHandler}>
											Sign In
										</a>
									</p>
								</div>
							</>
						)}

						{signIn && (
							<>
								<Formik
									initialValues={signInInitialValues}
									onSubmit={(values, formikHelpers) => {
										setLoginError(false);
										setIsLoading(true);

										fetch(process.env.REACT_APP_API_URL + '/auth/login', {
											method: 'POST',
											headers: {
												'Content-Type': 'application/json',
											},
											body: JSON.stringify(values),
										})
											.then((response) => {
												setIsLoading(false);
												if (response.ok) {
													return response.json();
												}
												throw new Error(response);
												//alert();
											})
											.then((data) => {
												if (data.success === true) {
													authCtx.login(data.token);
													navigate('/welcome', { replace: true });
												}
											})
											.catch((err) => {
												//alert(err);
												setLoginError(true);
											});
										formikHelpers.resetForm();
									}}
									validationSchema={object({
										username: string().required('Please enter your username'),
										password: string().required('Please enter your password'),
									})}
								>
									{({ errors, isValid, touched, dirty }) => (
										<Form>
											<Field
												fullWidth
												name='username'
												type='username'
												as={TextField}
												variant='standard'
												label='Username'
												error={
													Boolean(errors.username) && Boolean(touched.username)
												}
												helperText={
													Boolean(touched.username) && errors.username
												}
											></Field>
											<Field
												fullWidth
												name='password'
												type='password'
												as={TextField}
												variant='standard'
												label='Password'
												error={
													Boolean(errors.password) && Boolean(touched.password)
												}
												helperText={
													Boolean(touched.password) && errors.password
												}
											></Field>
											<p className={classes['forgot-password']}>
												<a href='/auth/forgotpassword'>Forgot Password?</a>
											</p>
											<div className={classes['button-container-sign-in']}>
												<button
													disabled={isLoading}
													style={{
														opacity: `${isLoading ? '0.5' : '1'}`,
													}}
													type='submit'
													className={`${classes['signin']} ${classes['bc-black']}`}
												>
													{!isLoading ? 'Login' : 'Please Wait'}
												</button>
												<button
													type='button'
													className={`${classes['signin']} ${classes['bc-white']}`}
													onClick={() => setSignIn(false)}
												>
													Sign Up
												</button>
											</div>
										</Form>
									)}
								</Formik>
							</>
						)}
					</Box>
				</div>
				<div className={classes['terms']}>
					<p>Terms of use. Privacy Policy</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpIn;
