import React from 'react';
import classes from './PrivateNoMatch.module.css';
const PrivateNoMatch = () => {
	return (
		<div className={classes['private-no-match-container']}>
			<div className={classes['private-no-match']}>
				<h1>There is nothing here</h1>
			</div>
		</div>
	);
};

export default PrivateNoMatch;
