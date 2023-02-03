import React from 'react';

//import Step11Context from '../../../../store/step-eleven';

import classes from './FiveSliders.module.css';
import PersonalSlider from '../Slider/Slider';
import SlidersLoading from './SlidersLoading.js';

const FiveSliders = ({ onValues, id, values, isLoading }) => {
	return (
		<section className={classes['five-sliders']}>
			{isLoading && <SlidersLoading />}
			{!isLoading &&
				values.map((v) => {
					return (
						<PersonalSlider
							title={v.title}
							id={v.id}
							value={v.value}
							onChange={onValues}
						/>
					);
				})}
		</section>
	);
};

export default FiveSliders;
