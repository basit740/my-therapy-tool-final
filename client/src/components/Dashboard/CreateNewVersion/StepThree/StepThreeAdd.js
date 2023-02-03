import React from 'react';
import classes from './StepThree.module.css';

function StepThreeAdd({
	i,
	onReflection,
	onHabit,
	habit,
	reflection,
	isLoading,
}) {
	const textAreaHandler = (event) => {
		onHabit(event.target.value);
	};
	const inputHandler = (event) => {
		onReflection(event.target.value);
	};
	return (
		<>
			<div className={classes['identify']}>
				<div>{i}</div>
				<div>
					<textarea
						onChange={textAreaHandler}
						value={isLoading ? 'loading...' : habit}
					></textarea>
					<br />
					<div>Reflection</div>
					<input
						className={classes['reflectionInputs']}
						onChange={inputHandler}
						value={isLoading ? 'loading...' : reflection}
					/>
				</div>
			</div>
		</>
	);
}

export default StepThreeAdd;
