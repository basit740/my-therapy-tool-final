import React from 'react';
import classes from './StepOne.module.css';

const StepOneOfElevenAdd = (props) => {
	let { i } = props;

	return (
		<>
			<div className={classes['numbers']}>
				<div>{i}</div>
				<div>
					<input onChange={props.onInput} id={props.id} />
				</div>
			</div>
		</>
	);
};

export default StepOneOfElevenAdd;
