import React, { useEffect, useReducer, useContext } from 'react';
import classes from './StepFour.module.css';
//import uniqueId from 'lodash.uniqueid';
import { DEFAULT_TAGS_DATA } from '../../../../data/step-four/defaultData';
import NewVersionContext from '../../../../store/new-version-context';
import StepFourStatic from './StepFourStatic';
import AddNewTag from './AddNewTag';
import Tag from '../../Shapes/UI/Tag';
import Loading from './Loading';

import { getTags } from '../../../../api/stepfour';

import reducer, { INITIAL_STATE, ACTIONS } from './reducer';

const StepFour = ({ onStateChange }) => {
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
			const response = await getTags(newVerCtx.versionId);
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
		<section className={classes.stepFourOfEleven}>
			<StepFourStatic />
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

export default StepFour;
