export const initialState = {
	goals: [],
	isLoading: true,
	first: [],
	second: [],
	third: [],
	fourth: [],
	fifth: [],
};

let currentYear = new Date().getFullYear();

export const ACTIONS = {
	ON_NEW_GOAL: 'on_new_goal',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
};
export default function redeucer(state, action) {
	const pState = { ...state };

	switch (action.type) {
		case ACTIONS.ON_NEW_GOAL:
			pState.goals = [...pState.goals, action.payload.newGoal];
			pState.first = pState.goals.filter(
				(g) => g.goalYear === currentYear.toString()
			);
			pState.second = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 1).toString()
			);
			pState.third = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 2).toString()
			);
			pState.fourth = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 3).toString()
			);
			pState.fifth = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 4).toString()
			);
			break;
		case ACTIONS.DATA_FROM_SERVER:
			action.payload.goals.map((g) => {
				g['id'] = g._id;
				g.goalYear = g.goalYear.toString();

				return g;
			});

			pState.goals = [...action.payload.goals];
			pState.first = pState.goals.filter(
				(g) => g.goalYear === currentYear.toString()
			);
			pState.second = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 1).toString()
			);
			pState.third = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 2).toString()
			);
			pState.fourth = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 3).toString()
			);
			pState.fifth = pState.goals.filter(
				(g) => g.goalYear === (currentYear + 4).toString()
			);
			pState.isLoading = false;
			break;
		case ACTIONS.DATA_FROM_LOCAL_STATE:
			pState.goals = [];
			pState.isLoading = false;
			break;
		default:
		// do nothing
	}
	return pState;
}
