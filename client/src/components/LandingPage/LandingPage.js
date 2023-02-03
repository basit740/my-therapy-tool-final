import React from 'react';
import classes from './LandingPage.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div className={classes['landing-page-container']}>
			<div className={classes['landing-page']}>
				<h2>Welcome to My Therapy Tool</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					blanditiis quos quas sit accusamus ipsa, atque omnis saepe dolorum.
					Minus natus porro fugit accusantium ea assumenda non deleniti quaerat
					sapiente, corporis ducimus iusto consectetur.
				</p>

				<div className={classes['welcome-action']}>
					<Link to='/dashboard'>Go to Dashboard</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
