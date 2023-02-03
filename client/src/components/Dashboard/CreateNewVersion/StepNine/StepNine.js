import React from 'react';
import VisionBoard from './VisionBoard.js';

import classes from './StepNine.module.css';

import StepNineStatic from './StepNineStatic.js';

// const goalsHandler = (goals) => {
// 	console.log('StepNine.js ', goals);
// };

const StepNine = ({ onStateChange }) => {
	return (
		<section className={classes.stepNineOfEleven}>
			<StepNineStatic />
			<div className={classes['vision-board-container']}>
				<VisionBoard onStateChange={onStateChange} />
			</div>
		</section>
	);
};

export default StepNine;
