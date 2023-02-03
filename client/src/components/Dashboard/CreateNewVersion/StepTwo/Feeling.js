import React from 'react';
import classes from './Feeling.module.css';

const Feeling = ({ id, feelingTitle, onDragStart, onDragEnd }) => {
	return (
		<div
			draggable='true'
			className={classes.feeling}
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			id={id}
			// style={{ border: isDragging ? '2px solid black' : '0px' }}
		>
			{feelingTitle}
		</div>
	);
};
export default Feeling;
