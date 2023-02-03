import React, { useEffect, useReducer, useContext } from 'react';

import VisionBoardCard from './VisionBoardCard';
import classes from './VisionBoard.module.css';

import NewVersionContext from '../../../../store/new-version-context';
import { getGoals } from '../../../../api/stepNine';

import reducer, { ACTIONS, initialState } from './reducer';
//const EMPTY_ARRRAY = [];
const VisionBoard = ({ onStateChange }) => {
	let currentYear = new Date().getFullYear();

	const newVerCtx = useContext(NewVersionContext);

	const [state, dispatch] = useReducer(reducer, initialState);

	let fiveYears = {
		currentYear: currentYear,
		currentYearFirstNext: currentYear + 1,
		currentYearSecondNext: currentYear + 2,
		currentYearThirdNext: currentYear + 3,
		currentYearFourthNext: currentYear + 4,
	};

	useEffect(() => {
		console.log('useEffect 1', state);
		onStateChange(state);
	}, [state, onStateChange]);

	useEffect(() => {
		(async () => {
			const response = await getGoals(newVerCtx.versionId);

			console.log('from server', response);
			if (response.success && response.data.length > 0) {
				dispatch({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: { goals: response.data },
				});
			} else {
				dispatch({
					type: ACTIONS.DATA_FROM_LOCAL_STATE,
				});
			}
		})();
	}, [newVerCtx.versionId]);

	return (
		<div className={classes['vision-board']}>
			<div className={classes['row']}>
				<div className={`${classes['col']} ${classes['no-padding']}`} style={{ padding: '0' }}>
					<VisionBoardCard
						goalYear={fiveYears.currentYear}
						onNewGoal={(goal) =>
							dispatch({
								type: ACTIONS.ON_NEW_GOAL,
								payload: { newGoal: goal },
							})
						}
						goals={state.first}
						isLoading={state.isLoading}
					/>
				</div>
				<div className={`${classes['col']} ${classes['no-padding']}`} style={{ padding: '0' }}>
					<VisionBoardCard
						goalYear={fiveYears.currentYearFirstNext}
						onNewGoal={(goal) =>
							dispatch({
								type: ACTIONS.ON_NEW_GOAL,
								payload: { newGoal: goal },
							})
						}
						goals={state.second}
						isLoading={state.isLoading}
					/>
				</div>
				<div className={classes['col']} style={{ padding: '0' }}>
					<VisionBoardCard
						goalYear={fiveYears.currentYearSecondNext}
						onNewGoal={(goal) =>
							dispatch({
								type: ACTIONS.ON_NEW_GOAL,
								payload: { newGoal: goal },
							})
						}
						goals={state.third}
						isLoading={state.isLoading}
					/>
				</div>
			</div>
			<div className={classes['row']}>
				<div className={classes['col']} style={{ padding: '0' }}>
					<VisionBoardCard
						goalYear={fiveYears.currentYearThirdNext}
						onNewGoal={(goal) =>
							dispatch({
								type: ACTIONS.ON_NEW_GOAL,
								payload: { newGoal: goal },
							})
						}
						goals={state.fourth}
						isLoading={state.isLoading}
					/>
				</div>
				<div className={classes['col']} style={{ padding: '0' }}>
					<VisionBoardCard
						goalYear={fiveYears.currentYearFourthNext}
						onNewGoal={(goal) =>
							dispatch({
								type: ACTIONS.ON_NEW_GOAL,
								payload: { newGoal: goal },
							})
						}
						goals={state.fifth}
						isLoading={state.isLoading}
					/>
				</div>
				<div className={classes['col']} style={{ padding: '0' }}></div>
			</div>
		</div>
	);
};

export default VisionBoard;
