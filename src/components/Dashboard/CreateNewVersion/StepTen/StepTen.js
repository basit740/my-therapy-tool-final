import React, { useReducer, useEffect, useContext } from 'react';
import classes from './StepTen.module.css';
import TagsManager from './TagsManager';

import { DEFAULT_TAGS_DATA } from '../../../../data/step-four/defaultData';
import { getTags } from '../../../../api/stepTen';
import StepTenStatic from './StepTenStatic';

import NewVersionContext from '../../../../store/new-version-context';

import reducer, { ACTIONS, INITIAL_STATE } from './reducer';

const StepTen = ({ onStateChange }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const newVerCtx = useContext(NewVersionContext);

	// const newTagHandler = (tagCategory) => {
	// 	if (state.tagTitle.trim() === '') {
	// 		return;
	// 	}
	// 	dispatch({
	// 		type: ACTIONS.ADD_NEW_TAG,
	// 		payload: { tagTitle: state.tagTitle, tagCategory: tagCategory },
	// 	});
	// };

	useEffect(() => {
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
		<div className={classes['step-ten-container']}>
			<div className={classes['step-ten']}>
				<StepTenStatic />
				<TagsManager
					tags={state.firstTags}
					onTitleChange={(event) =>
						dispatch({
							type: ACTIONS.CHANGE_TITLE_FIRST,
							payload: { tagTitle: event.target.value },
						})
					}
					tagTitle={state.tagTitleFirst}
					onNewTag={(tagCategory) => {
						dispatch({
							type: ACTIONS.ADD_NEW_TAG_FIRST,
							payload: { tagCategory: tagCategory },
						});
					}}
					onSelectToggle={(item) => {
						dispatch({
							type: ACTIONS.TOGGLE_SELECT,
							payload: { data: item, tagsManager: 1 },
						});
					}}
					tagCateogory='rules'
					isLoading={state.isLoading}
				/>

				<TagsManager
					tags={state.secondTags}
					onTitleChange={(event) =>
						dispatch({
							type: ACTIONS.CHANGE_TITLE_SECOND,
							payload: { tagTitle: event.target.value },
						})
					}
					tagTitle={state.tagTitleSecond}
					onNewTag={(tagCategory) => {
						dispatch({
							type: ACTIONS.ADD_NEW_TAG_SECOND,
							payload: { tagCategory: tagCategory },
						});
					}}
					onSelectToggle={(item) => {
						dispatch({
							type: ACTIONS.TOGGLE_SELECT,
							payload: { data: item, tagsManager: 2 },
						});
					}}
					tagCateogory='breakthroughs'
					isLoading={state.isLoading}
				/>

				<TagsManager
					tags={state.thirdTags}
					onTitleChange={(event) =>
						dispatch({
							type: ACTIONS.CHANGE_TITLE_THIRD,
							payload: { tagTitle: event.target.value },
						})
					}
					onNewTag={(tagCategory) => {
						dispatch({
							type: ACTIONS.ADD_NEW_TAG_THIRD,
							payload: { tagCategory: tagCategory },
						});
					}}
					tagTitle={state.tagTitleThird}
					onSelectToggle={(item) => {
						dispatch({
							type: ACTIONS.TOGGLE_SELECT,
							payload: { data: item, tagsManager: 3 },
						});
					}}
					tagCateogory='realizations'
					isLoading={state.isLoading}
				/>
			</div>
		</div>
	);
};

export default StepTen;
