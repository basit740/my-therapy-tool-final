import React, { useReducer, useContext, useEffect } from 'react';
import NewVersionContext from '../../../../store/new-version-context';
import StepFiveAdd from './StepFiveAdd';
import classes from './StepFive.module.css';
import StepFiveStatic from './StepFiveStatic';
import reducer, { ACTIONS, initialState } from './reducer';

import { getActions } from '../../../../api/stepFive';

function StepFive({ onStateChange }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const newVerCtx = useContext(NewVersionContext);

	const firstActionHandler = (e) => {
		dispatch({
			type: ACTIONS.FIRST_ACTION,
			payload: { value: e.target.value },
		});
	};

	const secondActionHandler = (e) => {
		dispatch({
			type: ACTIONS.SECOND_ACTION,
			payload: { value: e.target.value },
		});
	};
	const thirdActionHandler = (e) => {
		dispatch({
			type: ACTIONS.THIRD_ACTION,
			payload: { value: e.target.value },
		});
	};

	const firstDateChangeHandler = (e) => {
		dispatch({
			type: ACTIONS.FIRST_DATE,
			payload: { value: e.target.value },
		});
	};
	const secondDateChangeHandler = (e) => {
		dispatch({
			type: ACTIONS.SECOND_DATE,
			payload: { value: e.target.value },
		});
	};
	const thirdDateChangeHandler = (e) => {
		dispatch({
			type: ACTIONS.THIRD_DATE,
			payload: { value: e.target.value },
		});
	};

	useEffect(() => {
		console.log('use effect 1', state);
		onStateChange(state);
	}, [state, onStateChange]);

	useEffect(() => {
		(async () => {
			const response = await getActions(newVerCtx.versionId);

			if (response.success && response.data.length > 0) {
				dispatch({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: { data: response.data },
				});
			} else {
				dispatch({
					type: ACTIONS.DATA_FROM_LOCAL_STATE,
					payload: {
						data: null,
					},
				});
			}
		})();
	}, [newVerCtx.versionId]);

	return (
		<section className={classes['takeAction']}>
			<StepFiveStatic />

			<StepFiveAdd
				onChange={firstActionHandler}
				value={state.actions[0].actionContent}
			/>

			<div></div>

			<div className={classes['addDate']}>
				<div>
					<input
						type='date'
						onChange={firstDateChangeHandler}
						value={state.actions[0].actionDate}
					/>
				</div>
				{/* <div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div> */}
			</div>
			<p className={classes['actionParagraph']}>
				Which are the Things you may Have to put on hold for a short while?
			</p>

			<StepFiveAdd
				onChange={secondActionHandler}
				value={state.actions[1].actionContent}
			/>

			<div></div>

			<div className={classes['addDate']}>
				<div>
					<input
						type='date'
						onChange={secondDateChangeHandler}
						value={state.actions[1].actionDate}
					/>
				</div>
				{/* <div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div> */}
			</div>

			<p className={classes['actionParagraph']}>
				Which are the Things you can work on accepting that you may have no
				control over for the time being?
			</p>

			<StepFiveAdd
				onChange={thirdActionHandler}
				value={state.actions[2].actionContent}
			/>

			<div></div>
			<div className={classes['addDate']}>
				<div>
					<input
						type='date'
						onChange={thirdDateChangeHandler}
						value={state.actions[2].actionDate}
					/>
				</div>
				{/* <div>
					<button onClick={addAnotherAction} className='AddMoreDate'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div> */}
			</div>
		</section>
	);
}

export default StepFive;
