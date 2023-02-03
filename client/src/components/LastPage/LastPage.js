import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getBenefits } from '../../api/stepEleven';
import { sendEmail } from '../../api/email';
import { getMe } from '../../api/user';
import { getVersionReport } from '../../api/version';
import NewVersionContext from '../../store/new-version-context';

import classes from './LastPage.module.css';

const LastPage = () => {
	const newVerCtx = useContext(NewVersionContext);

	const [totalScore, setTotalScore] = useState(0);
	const [loading, setLoading] = useState(true);
	const [sending, setIsSending] = useState(false);

	const [email, setEmail] = useState('');
	const [report, setReport] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);

	const submitHandler = async (event) => {
		event.preventDefault();
		setIsSending(true);

		const options = {
			email: email,
			subject: 'Version Report',
			versionName: report.versionName,
			fullNameOfUser: currentUser.firstName + ' ' + currentUser.lastName,
			stepsData: [...report.stepsData],
		};
		const result = await sendEmail(options);
		setIsSending(false);
		console.log(result);
	};

	useEffect(() => {
		(async () => {
			const response = await getBenefits(newVerCtx.versionId);
			let score = 0;
			if (response.success && response.data.length > 0) {
				response.data.forEach((b) => {
					score += b.value;
				});
				setTotalScore(score);
			} else {
				console.log('do nothing here');
			}

			const meResponse = await getMe();
			console.log('me', meResponse);

			if (meResponse.success) {
				setCurrentUser(meResponse.data);
			} else {
				console.log('do nothing here');
			}

			// get verions report

			const resportResponse = await getVersionReport(newVerCtx.versionId);

			console.log(resportResponse);
			if (resportResponse.success) {
				setReport(resportResponse.data);
			} else {
				console.log('do nothing here');
			}

			setLoading(false);
		})();

		// (async () => {
		// 	const response = await getVersionReport(newVerCtx.versionId);

		// 	console.log(response);
		// 	if (response.success && response.data.length > 0) {
		// 		setReport(response.data);
		// 	} else {
		// 		console.log('do nothing here');
		// 	}
		// })();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className={classes['last-page-container']}>
			<div className={classes['last-page']}>
				<h2>Congratulations! You have successfuly completed this version.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					blanditiis quos quas sit accusamus ipsa, atque omnis saepe dolorum.
				</p>
				{!loading && (
					<p className={classes['doc-form']}>
						<form onSubmit={submitHandler}>
							<input
								type='text'
								placeholder='email of Doc.'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>{' '}
							<button className='mtt-btn' type='submit'>
								{sending ? 'sending...' : 'Send Report'}
							</button>
						</form>
					</p>
				)}
				{loading && <h4 style={{ color: 'blue' }}>preparing report...</h4>}
				<p>
					<h3>Your Score</h3>

					<span
						style={{
							fontSize: '20px',
						}}
					>
						{totalScore}
					</span>
				</p>
				<div className={classes['last-page-action']}>
					<Link to='/dashboard'>Go to Dashboard</Link>
				</div>
			</div>
		</div>
	);
};

export default LastPage;
