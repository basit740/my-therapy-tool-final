import React from 'react';
import classes from './Goal.module.css';
const Goal = (props) => {
	//const [showDeleteBtn, setShowDeleteBtn] = useState(false);
	const clickHandler = (event) => {
		console.log('handling delete');
	};
	return (
		<div className={classes.goal} id={props.id} onClick={clickHandler}>
			<div className={classes['goal__content']}>{props.goalTitle}</div>
		</div>
	);
};

export default Goal;
