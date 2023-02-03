import React from 'react';
import DotsLaoding from './DotsLaoding';
import classes from './SliderSteps.module.css';
const Dots = ({ currentStep, onDotClick, isLoading }) => {
	const dotClickHandler = (event) => {
		onDotClick(event.target.id);
	};

	return (
		<>
			<div className={classes['steps-info']}>
				<div>
					{!isLoading ? <h3>Step {currentStep} of 5</h3> : <DotsLaoding />}
				</div>

				<div className={classes['dots']}>
					<div
						id='1'
						onClick={dotClickHandler}
						className={
							currentStep === '1'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						id='2'
						onClick={dotClickHandler}
						className={
							currentStep === '2'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						id='3'
						onClick={dotClickHandler}
						className={
							currentStep === '3'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						id='4'
						onClick={dotClickHandler}
						className={
							currentStep === '4'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						id='5'
						onClick={dotClickHandler}
						className={
							currentStep === '5'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
				</div>
			</div>
		</>
	);
};

export default Dots;
