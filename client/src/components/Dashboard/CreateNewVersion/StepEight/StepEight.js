import React, { useEffect, useReducer, useContext } from 'react';

import classes from './StepEight.module.css';
//import uniqueId from 'lodash.uniqueid';

import { DEFAULT_TAGS_DATA } from '../../../../data/step-eight/defaultData';
import NewVersionContext from '../../../../store/new-version-context';

import AddNewTag from './AddNewTag';
import Tag from '../../Shapes/UI/Tag.js';
import Loading from './Loading';

import StepEightStatic from './StepEightStatic';

import { get8Tags } from '../../../../api/stepEight';

import reducer, { INITIAL_STATE, ACTIONS } from './reducer';

const StepEight = ({ onStateChange }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const newVerCtx = useContext(NewVersionContext);
	const newTagHandler = () => {
		if (state.tagTitle.trim() === '') {
			return;
		}
		dispatch({
			type: ACTIONS.ADD_NEW_TAG,
			payload: { data: state.tagTitle },
		});
	};

	useEffect(() => {
		//console.log(' step4 useeffect 1');
		//console.log(state);
		onStateChange(state);
	}, [state, onStateChange]);

	useEffect(() => {
		(async () => {
			const response = await get8Tags(newVerCtx.versionId);
			console.log('response..', response);
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
					payload: {
						data: DEFAULT_TAGS_DATA,
					},
				});
			}
		})();
	}, [newVerCtx.versionId]);
	return (
		<section className={classes.stepEightOfEleven}>
			<StepEightStatic />

			<AddNewTag
				onNewTag={newTagHandler}
				onTitle={(event) =>
					dispatch({
						type: ACTIONS.CHANGE_TITLE,
						payload: { data: event.target.value },
					})
				}
				tagTitle={state.tagTitle}
			/>

			<br />

			<div className={classes.selectedTextArea}>
				{state.dataIsLoading && <Loading />}

				{!state.dataIsLoading && state.tags.length > 0 ? (
					state.tags.map((obj, i) => (
						<Tag
							key={obj.id}
							title={obj.title}
							id={obj.id}
							status={obj.status}
							onClick={(item) => {
								dispatch({
									type: ACTIONS.TOGGLE_SELECT,
									payload: { data: item },
								});
							}}
						/>
					))
				) : (
					<div></div>
				)}
			</div>
		</section>
	);
};

export default StepEight;
