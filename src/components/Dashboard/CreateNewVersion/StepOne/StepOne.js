import React, { useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import NewVersionContext from '../../../../store/new-version-context';
import classes from './StepOne.module.css';
import StepOneAdd from './StepOneAdd';
import StepOneStatic from './StepOneStatic';

import uniqid from 'uniqid';

const initialState = {
	inputBoxes: [
		{ id: 'inp1', issueTitle: '' },
		{ id: 'inp2', issueTitle: '' },
		{ id: 'inp3', issueTitle: '' },
	],
};

function reducer(state, action) {
	const preState = { ...state };

	if (action.type === 'ADD_NEW_INPUT') {
		const newInput = {
			id: uniqid(),
			issueTitle: '',
		};
		preState.inputBoxes = [...preState.inputBoxes, newInput];
	} else if (action.type === 'ON_INPUT') {
		preState.inputBoxes.map((inp) => {
			if (inp.id === action.payload.id) {
				inp.issueTitle = action.payload.value;
			}
			return '1'; // just for avoiding es-lint warnings
		});
	} else {
		//do nothing
	}

	return preState;
}
const StepOne = (props) => {
	const navigate = useNavigate();

	const [compState, dispatch] = useReducer(reducer, initialState);

	const newVerCtx = useContext(NewVersionContext);

	useEffect(() => {
		if (newVerCtx.versionId === '') {
			navigate('/dashboard', { replace: true });
		}
		newVerCtx.onStepOneStateChange(compState);
	}, [
		newVerCtx.versionId,
		navigate,
		compState,
		newVerCtx.onStepOneStateChange,
		newVerCtx,
	]);

	return (
		<section className={classes['bodySection']}>
			<div className={classes['stepOneOfEleven']}>
				<div>
					<h3 className={classes['whatIsBothering']}>What is bothering you?</h3>
				</div>

				<StepOneStatic />

				{compState.inputBoxes.map((inp) => {
					return (
						<>
							<StepOneAdd
								onInput={(event) =>
									dispatch({
										type: 'ON_INPUT',
										payload: {
											value: event.target.value,
											id: event.target.id,
										},
									})
								}
								id={inp.id}
							/>
							<div></div>
						</>
					);
				})}
				<div className={classes['add']}>
					<div>
						<button
							onClick={(event) =>
								dispatch({
									type: 'ADD_NEW_INPUT',
								})
							}
							className={classes['AddMore']}
						>
							<div className={classes['addition']}>+</div>
							<div>Add another</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StepOne;
