import React from 'react';
import classes from './Tag.module.css';

const Tag = ({ title, id, onClick, status }) => {
	//const [localStatus, setLocalStatus] = useState(status);

	// const [classes, setClasses] = useState('tag');
	const clickHandler = () => {
		onClick({
			id: id,
			status: status,
			title: title,
		});
	};

	return (
		<div
			className={status === classes['selected'] ? `${classes['tag']} ${classes['tag_selected']}` : classes['tag']}
			onClick={clickHandler}
		>
			{title}
		</div>
	);
};

export default Tag;
