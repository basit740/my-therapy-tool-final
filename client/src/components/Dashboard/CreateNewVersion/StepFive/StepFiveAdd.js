import React from 'react';

function StepFiveAdd(props) {
	console.log(props.value);
	return (
		<>
			<div className='actionArea'>
				<div>
					<textarea onChange={props.onChange} value={props.value}></textarea>
				</div>
			</div>
		</>
	);
}

export default StepFiveAdd;
