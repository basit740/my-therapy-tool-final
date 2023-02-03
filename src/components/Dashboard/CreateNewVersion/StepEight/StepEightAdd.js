import React from 'react';
import classes from './StepEight.module.css';

function StepEightAdd(props) {
	let { text, style, textColor } = props;

	return (
		<div className={classes.selectedItem}>
			<div style={{ 'background-color': style, color: textColor }}>{text}</div>
		</div>
	);
}

export default StepEightAdd;
