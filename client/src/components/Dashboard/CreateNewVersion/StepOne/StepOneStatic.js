import React from 'react';
import classes from './StepOne.module.css'
const StepOneStatic = () => {
	return (
		<div className={classes['paragraph']}>
			<p>
				What is bothering you? Is it stress, distractions, pressures, fear,
				something, someone? Is there something that you want or need? This
				question is like a to do list. It can be as simple as a scuff on your
				shoe that is bothering you or as complex as that bad relationship that
				you want to get out of - either one of these can lead to a downward
				spiral. The list may be long at first, but it will begin to shrink
				before you know it as you start addressing the items on the list and
				start seeing the difference in yourself. Some examples: my job stinks,
				the house needs to be painted, I'm lonely, my housing situation is
				unbearable, a lack of money, relationship problems.
			</p>
			<p>
				<b>
					Go ahead and take a couple of minutes to list some of the things that
					are bothering you.
				</b>
			</p>
		</div>
	);
};

export default StepOneStatic;
