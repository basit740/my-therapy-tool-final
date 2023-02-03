import React from 'react';
import classes from './StepFour.module.css';

function StepFourAdd(props) {
	let { text, style, textColor } = props;

	return (
		<div className={classes['selectedItem']}>
			<div style={{ 'background-color': style, color: textColor }}>{text}</div>
		</div>
	);
}

export default StepFourAdd;
