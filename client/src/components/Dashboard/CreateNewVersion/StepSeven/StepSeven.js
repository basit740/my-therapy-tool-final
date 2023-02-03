import React from 'react';
import classes from './StepSeven.module.css';
import StepSevenStatic from './StepSevenStatic';
import Thoughts from './Thoughts';

const StepSeven = ({ onStateChange }) => {
	//const [thoughtCards, setThoughtCards] = useState('');

	// const newThoughtHandler = (newThought) => {
	// 	console.log(newThought);

	// 	let indexOfThoughtCard = newThought.cardId;
	// 	setThoughtCards((thoughtCards) => {
	// 		return [...thoughtCards[indexOfThoughtCard].thoughts, newThought];
	// 	});
	// };

	return (
		<section className={classes['step-seven']}>
			<StepSevenStatic />

			<div className={classes['thoughts']}>
				<Thoughts onStateChange={onStateChange} />
			</div>
		</section>
	);
};

export default StepSeven;
