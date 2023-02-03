import React from 'react';
import classes from './StepSix.module.css';

const StepSixAdd = ({ value, onChange, id, number, isLoading }) => {
	return (
		<>
			<div className={classes['numbers']}>
				<div>{number}</div>
				<div>
					<input
						style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
						id={id}
						value={isLoading ? 'loading...' : value}
						onChange={onChange}
					></input>
				</div>
			</div>
		</>
	);
};

export default StepSixAdd;
