import React, { useContext } from 'react';
import classes from './Step.module.css';
import { dateFormatter } from '../../utils/items';
import { Link, useNavigate } from 'react-router-dom';
import NewVersionContext from '../../store/new-version-context';
const Step = ({ date, title, actionType, stepNumber }) => {
	const properDate = dateFormatter(date);

	const newVerCtx = useContext(NewVersionContext);

	const navigate = useNavigate();

	const stepsHandler = (event) => {
		event.preventDefault();
		newVerCtx.currentStepHandler(1 + parseInt(event.target.id));
		navigate('/dashboard/newjourney');
	};

	return (
		<div className={classes['step']}>
			<div className={classes['step__info']}>
				<div className={classes['step__info__status']}></div>
				<div className={classes['step__info__content']}>
					<h6>{title}</h6>
					<span className={classes['date']}>{properDate}</span>
				</div>
			</div>
			<div className={classes['step__actions']}>
				{/* <div>{actionType}</div> */}
				<Link
					onClick={stepsHandler}
					to='/dashboard/newjourney'
					id={stepNumber}
					className={classes['step__action']}
				>
					{actionType}
				</Link>
			</div>
		</div>
	);
};

export default Step;
