import React from 'react';
import classes from './StepFour.module.css';
function AddNewTag({ tagTitle, onTitle, onNewTag }) {
	return (
		<>
			<div className={classes['text-area-wrapper']}>
				<textarea
					className={classes['selectedArea']}
					onChange={onTitle}
					value={tagTitle}
				></textarea>
				<div className={classes['add-button']}>
					<div className={classes['plus-icon']} onClick={onNewTag}>
						+
					</div>{' '}
					<div>Add</div>
				</div>
			</div>
		</>
	);
}

export default AddNewTag;
