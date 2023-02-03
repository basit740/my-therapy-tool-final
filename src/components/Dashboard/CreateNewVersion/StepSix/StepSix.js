import React, { useReducer, useEffect, useContext } from 'react';
import NewVersionContext from '../../../../store/new-version-context';
import StepSixAdd from './StepSixAdd';
import classes from './StepSix.module.css';
import StepSixStatic from './StepSixStatic';

//import uniqueId from 'lodash.uniqueid';
import reducer, { ACTIONS, initialState } from './reducer';
import { getContacts } from '../../../../api/stepSix';

const StepSix = ({ onStateChange }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const newVerCtx = useContext(NewVersionContext);
	const enterText = (event) => {
		dispatch({
			type: ACTIONS.ENTER_TEXT,
			payload: {
				id: event.target.id,
				value: event.target.value,
			},
		});
	};

	const addContact = () => {
		dispatch({
			type: ACTIONS.ADD_CONTACT,
		});
	};

	useEffect(() => {
		onStateChange(state);
	}, [state, onStateChange]);

	useEffect(() => {
		(async () => {
			const response = await getContacts(newVerCtx.versionId);
			if (response.success && response.data.length > 0) {
				dispatch({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: {
						data: response.data,
					},
				});
			} else {
				dispatch({
					type: ACTIONS.DATA_FROM_LOCAL_STATE,
				});
			}
		})();
	}, [newVerCtx.versionId]);
	return (
		<section className={classes['sectionReachOut']}>
			<StepSixStatic />

			{state.contacts.map((ct, index) => {
				return (
					<StepSixAdd
						id={ct.id}
						key={ct.id}
						number={index + 1}
						value={ct.contactDetail}
						onChange={enterText}
						isLoading={state.isLoading}
					/>
				);
			})}

			<div></div>

			<div className={classes['add']}>
				<div>
					<button className={classes['AddMore']} onClick={addContact}>
						<div className={classes['addition']}>+</div>
						<div>Add another</div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default StepSix;
