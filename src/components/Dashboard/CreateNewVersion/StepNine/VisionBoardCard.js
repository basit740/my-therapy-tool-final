import React, { useState } from 'react';
import classes from './VisionBoardCard.module.css';
import Goal from './Goal';
import uniqueId from 'lodash.uniqueid';

import Loading from '../StepNine/Loading';
const VisionBoardCard = (props) => {
	const [inputIsHidden, setInputIsHidden] = useState(true);
	const [goal, setGoal] = useState({});

	const inputShowHandler = (event) => {
		if (inputIsHidden) {
			setInputIsHidden(false);
		} else {
			setInputIsHidden(true);
		}
	};

	const submitHandler = (event) => {
		event.preventDefault();

		props.onNewGoal(goal);
	};
	const changeHandler = (event) => {
		const goal = {
			id: 'goal_' + uniqueId(),
			goalTitle: event.target.value,
			goalYear: props.goalYear.toString(),
		};

		setGoal(goal);
	};

	// const deleteHandler = (event) => {
	// 	const goalId = event.target.id;

	// 	const filterd = goals.filter((g) => g.id !== goalId);
	// 	setGoals(filterd);
	// };

	return (
		<div className={classes['vision-board-card']} id={props.year}>
			<div className={classes['board-card__header']}>
				<h5>{props.goalYear}</h5>
			</div>

			<div className={classes['board-card__content']}>
				{props.isLoading && <Loading />}
				{!props.isLoading &&
					props.goals.map((g) => {
						return (
							<Goal
								goalTitle={g.goalTitle}
								id={g.id}
								parentId={g.goalYear}
								//onDelete={deleteHandler}
							/>
						);
					})}
			</div>

			<div className={classes['board-card__action']}>
				{!inputIsHidden && (
					<form onSubmit={submitHandler}>
						<input
							type='text'
							placeholder='enter your goal'
							onChange={changeHandler}
						/>
					</form>
				)}
				<div
					onClick={inputShowHandler}
					className={classes['board-card-action__btn-add']}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default VisionBoardCard;
