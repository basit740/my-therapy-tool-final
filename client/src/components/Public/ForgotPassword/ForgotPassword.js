import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { sendResetCode, verifyCode, resetPassword } from '../../../api/user';

import classes from './ForgotPassword.module.css';
const ForgotPassword = () => {
	const navigate = useNavigate();
	const [guideText, setGuideText] = useState('Registered Email ');
	const [error, setError] = useState({
		yes: false,
		message: '',
	});

	const [isLoading, setIsLoading] = useState(false);
	// const [codeSent, setCodeSent] = useState(false);
	const [showResetPassword, setShowResetPassword] = useState(false);
	const [codeAttemps, setCodeAttemps] = useState(0);

	const emailRef = useRef();
	const codeRef = useRef();
	const passwordRef = useRef();

	const [email, setEmail] = useState('');
	const [code, setCode] = useState('');
	const [password, setPassword] = useState('');

	const [steps, setSteps] = useState({
		first: true,
		second: false,
		third: false,
	});

	const sendCodeHandler = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		const response = await sendResetCode(email);

		setIsLoading(false);

		if (response.success) {
			setSteps({
				...steps,
				first: false,
				second: true,
			});
			setGuideText('4 Digit Code');
		} else {
			setError({
				yes: true,
				message: response.error,
			});

			alert(response.error);
		}
	};

	const verifyCodeHandler = async (e) => {
		setIsLoading(true);
		e.preventDefault();

		const response = await verifyCode(email, code);
		setIsLoading(false);
		if (response.success) {
			setSteps({
				...steps,
				second: false,
				third: true,
			});
			setGuideText('New Password');
		} else {
			if (codeAttemps === 2) {
				resetEverything();
			}
			let attemps = codeAttemps;
			attemps = attemps + 1;
			console.log(attemps);
			setCodeAttemps(attemps);

			alert(response.error);
		}
	};

	const passwordHandler = async (e) => {
		e.preventDefault();
		const response = await resetPassword(email, password);
		if (response.success) {
			navigate('/auth');
		} else {
			alert('password was not updated!');
		}
	};

	const resetEverything = () => {
		// console.log(codeSent);
		// console.log(resetEverything);
		// console.log(setCodeSent);
		// console.log(showResetPassword);
		// console.log(resetEverything);
		setGuideText('Registered Email');
		setSteps({
			first: true,
			second: false,
			third: false,
		});
	};

	console.log(resetEverything);
	console.log(setShowResetPassword);
	console.log(showResetPassword);

	useEffect(() => {
		emailRef.current.focus();
	}, []);
	return (
		<div className={classes['forgotpassword']}>
			<div className={classes['forgotpassword__main']}>
				<div className={classes['forgotpassword__content']}>
					<h2 style={{ textAlign: 'center' }}>{guideText}</h2>
					{steps.first && (
						<div className={classes['send-code-section']}>
							<form onSubmit={sendCodeHandler}>
								<lable>Please enter your registered email here</lable>
								<input
									style={{
										borderColor: error.yes ? 'red' : '',
									}}
									ref={emailRef}
									type='email'
									placeholder='email'
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
								<button type='submit'>
									{isLoading ? 'sending code...' : 'Submit'}
								</button>
							</form>
						</div>
					)}

					{steps.second && (
						<div className={classes['code-section']}>
							<form onSubmit={verifyCodeHandler}>
								<div className={classes['input-group']}>
									<lable>
										Enter code 4 digit code here that you have recieved via
										email
									</lable>
									<input
										ref={codeRef}
										type='number'
										value={code}
										maxlength='4'
										onChange={(event) => {
											setCode(event.target.value);
										}}
									/>

									<button type='submit'>
										{isLoading ? 'verifying code...' : 'Submit'}
									</button>
								</div>
							</form>
						</div>
					)}

					{steps.third && (
						<div className={classes['reset-password-section']}>
							<form onSubmit={passwordHandler}>
								<div className={classes['input-group']}>
									<lable>Enter your new password</lable>
									<input
										ref={passwordRef}
										type='password'
										value={password}
										onChange={(event) => {
											setPassword(event.target.value);
										}}
									/>

									<button type='submit'>
										{isLoading ? 'Reseting password...' : 'Submit'}
									</button>
								</div>
							</form>
						</div>
					)}
				</div>
				<p style={{ textAlign: 'center' }}>My Thereapy Tool</p>
			</div>
		</div>
	);
};

export default ForgotPassword;
