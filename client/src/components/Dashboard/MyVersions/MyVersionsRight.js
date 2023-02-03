import React from 'react';
import classes from './MyVersionsRight.module.css';
import Activity from '../Activity.js';

const MyVersionsRight = () => {
	return (
		<div className={classes['my-versions-right']}>
			<h6>RECENT ACTIVITY</h6>
			<Activity></Activity>
			<Activity></Activity>
			<Activity></Activity>
			<Activity></Activity>
		</div>
	);
};

export default MyVersionsRight;
