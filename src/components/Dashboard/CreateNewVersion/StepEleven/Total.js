import React from 'react';

import './Total.css';

const Total = ({ points }) => {
	return (
		<div className='total-container'>
			<div className='total__content'>{points}</div>
		</div>
	);
};

export default Total;
