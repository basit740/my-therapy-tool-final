import React, { useEffect, useReducer, useContext } from 'react';

import NoVersion from '../NoVersion';

import NewVersionContext from '../../../store/new-version-context';
import { useNavigate } from 'react-router-dom';

import { getVersions } from '../../../api/version';
import classes from './MyVersionsLeft.module.css';

import MyVersion from './MyVersion';

import MyVersionsLoading from './MyVersionsLoading';

const iState = {
	versions: [],
	isLoading: true,
};

const reducer = (state, action) => {
	const pState = { ...state };

	if (action.type === 'DATA_FROM_SERVER') {
		console.log(action);
		pState.versions = [...action.payload.versions];
		pState.versions.map((v) => {
			v['id'] = v._id;
			return null;
		});
		pState.isLoading = false;
	} else if (action.type === 'NO_DATA') {
		pState.isLoading = false;
	}
	return pState;
};
const MyVersionsLeft = () => {
	const [state, dispatch] = useReducer(reducer, iState);

	const navigate = useNavigate();

	const newVerCtx = useContext(NewVersionContext);

	const actionHandler = (id, stepsCount) => {
		newVerCtx.versionIdHandler(id);
		newVerCtx.currentStepHandler(stepsCount + 1);
		navigate('/dashboard/newjourney');
	};

	useEffect(() => {
		(async () => {
			const response = await getVersions();
			console.log('in useEffect 1', response.data);
			if (response.success && response.data.length > 0) {
				dispatch({
					type: 'DATA_FROM_SERVER',
					payload: {
						versions: response.data,
					},
				});
			} else if (response.success && response.data.length === 0) {
				dispatch({
					type: 'NO_DATA',
				});
			}
		})();
	}, []);

	useEffect(() => {
		console.log(state.versions);
	}, [state.versions]);
	return (
		<div className={classes['my-versions-left']} style={{ overflowY: 'scroll' }}>
			<h6>MY VERSIONS</h6>
			<table cellSpacing='0' cellPadding='0'>
				<thead>
					<tr>
						<th>Date</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{state.isLoading && <MyVersionsLoading />}
					{/* {state.versions.length === 0 && (
						<h4 style={{ marginTop: '35px', textAlign: 'center' }}>
							Not Data Available
						</h4>
					)} */}
					{state.versions.length > 0 &&
						state.versions.map((vr) => {
							return (
								<MyVersion
									id={vr._id}
									date={vr.createdAt}
									status={vr.status}
									stepsCount={vr.stepsCount}
									onAction={actionHandler}
								/>
							);
						})}

					{!state.isLoading && state.versions.length === 0 && (
						<NoVersion title='No Versions Created Yet' />
					)}
				</tbody>
			</table>
		</div>
	);
};

export default MyVersionsLeft;
