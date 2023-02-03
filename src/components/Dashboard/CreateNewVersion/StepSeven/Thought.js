import React, { useState } from 'react';

import './Thought.css';
const Thought = (props) => {
	const [delIsShown, setDelIsShown] = useState(false);

	const delBtnHider = (event) => {
		setDelIsShown(false);
	};
	const delBtnShower = (event) => {
		setDelIsShown(true);
	};
	return (
		<div
			id={props.id}
			className='thought'
			draggable='true'
			onDragStart={props.onDragStart}
			onDragEnd={props.onDragEnd}
			onMouseEnter={delBtnShower}
			onMouseLeave={delBtnHider}
		>
			<div>{props.thoughtContent}</div>
			{delIsShown && (
				<div
					className='del-thg'
					onClick={props.onDelete}
					id={props.id}
					parentId={props.parentId}
				>
					X
				</div>
			)}
		</div>
	);
};

export default Thought;
