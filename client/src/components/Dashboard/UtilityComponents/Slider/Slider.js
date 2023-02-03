import React, { useRef } from 'react';

import classes from './Slider.module.css';

import Slider from '@mui/material/Slider';

const PersonalSlider = (props) => {
	const sRef = useRef();

	const changeHandler = (event) => {
		props.onChange(event.target.value, sRef.current.id);
	};
	return (
		<div className={classes['personal-slider']} id={props.id}>
			<h5>{props.title}</h5>
			<Slider
				id={props.id}
				className={classes.slider}
				aria-label='Restricted values'
				valueLabelDisplay='auto'
				onChange={changeHandler}
				value={props.value}
				step={1}
				min={1}
				max={10}
				classes={{
					track: classes.track,
					rail: classes.rail,
					thumb: classes.thumb,
				}}
				ref={sRef}
			/>
		</div>
	);
};

export default PersonalSlider;
