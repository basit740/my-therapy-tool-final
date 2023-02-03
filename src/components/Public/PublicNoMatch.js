import React from 'react';

import classes from './PubicNoMatch.module.css';

const PubicNoMatch = () => {
	return (
		<div className={classes['public-no-match-container']}>
			<div className={classes['public-no-match']}>
				<h1>Nothing Here, please Login</h1>
			</div>
		</div>
	);
};

export default PubicNoMatch;
