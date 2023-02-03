import React, { useState } from 'react';
import classes from './StepEleven.module.css';

import Total from './Total';

import { Step11ContextProvider } from '../../../../store/step-eleven';

import StepElevenStatic from './StepElevenStatic';
import SliderSteps from './SliderSteps/SliderSteps';
const StepEleven = ({ onStateChange }) => {
	const [points, setPoints] = useState(25);
	const stateChangeHandler = (state) => {
		setPoints(state.total);
		localStorage.setItem('step11Points', state.total);
		onStateChange(state);
	};
	return (
		<Step11ContextProvider>
			<section className={classes['step-eleven']}>
				<StepElevenStatic />

				<div className={classes['sliders']}>
					<SliderSteps onStateChange={stateChangeHandler} />
				</div>
				<Total points={points} />
			</section>
		</Step11ContextProvider>
	);
};

export default StepEleven;
