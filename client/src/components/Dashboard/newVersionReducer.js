import { steps } from '../../data/new-version/steps';
export const initialState = {
	versions: [],
	selectedVersion: null,
	firstFive: [],
	secondFive: [],
	isLoading: true,
};

export default function reducer(state, action) {
	const pState = { ...state };

	if (action.type === 'DATA_FROM_SERVER') {
		const recentVersions = action.payload.data.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);

		const latestInProgress = recentVersions.find((v) => {
			return v.status === 'in_progress';
		});

		if (latestInProgress) {
			pState.selectedVersion = { ...latestInProgress };

			const filtered = steps.filter(
				(s) => s.stepNumber !== latestInProgress.stepsCount
			);
			pState.firstFive = [...filtered.slice(0, 5)];
			pState.secondFive = [...filtered.slice(5, 10)];
		}

		pState.isLoading = false;
	} else if (action.type === 'DATA_LOADING') {
		pState.isLoading = true;
	} else if (action.type === 'SELECT_VERSION') {
		pState.selectedVersion = action.payload.version;

		const filtered = steps.filter(
			(s) => s.stepNumber !== state.selectedVersion.stepsCount
		);
		pState.firstFive = [...filtered.slice(0, 5)];
		pState.seocndFive = [...filtered.slice(5, 10)];
		pState.isLoading = false;
	} else if (action.type === 'NO_DATA') {
		pState.isLoading = false;
	}
	return pState;
}
