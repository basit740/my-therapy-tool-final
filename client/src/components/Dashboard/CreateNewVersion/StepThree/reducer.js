export const ACTIONS = {
	ON_FIRST_HABIT: 'on_first_habit',
	ON_SECOND_HABIT: 'on_second_habit',
	ON_THIRD_HABIT: 'on_third_habit',
	ON_FIRST_REFLECTION: 'on_first_reflection',
	ON_SECOND_REFLECTION: 'on_second_reflection',
	ON_THIRD_REFLECTION: 'on_third_reflection',
	DATA_FROM_GLOBAL_STATE: 'data_from_global_state',
	DATA_FROM_SERVER: 'data_from_server',
	dataLoading: true,
};
export const initialState = {
	feelings: [
		{ id: 1, feelingContent: '', feelingReflection: '' },
		{ id: 2, feelingContent: '', feelingReflection: '' },
		{ id: 3, feelingContent: '', feelingReflection: '' },
	],
	isLoading: true,
};

export default function reducer(state, action) {
	let type = action.type;
	let data = action.payload.data;
	let prevState = { ...state };

	switch (type) {
		case ACTIONS.ON_FIRST_HABIT:
			prevState.feelings[0].feelingContent = data;
			break;
		case ACTIONS.ON_SECOND_HABIT:
			prevState.feelings[1].feelingContent = data;
			break;
		case ACTIONS.ON_THIRD_HABIT:
			prevState.feelings[2].feelingContent = data;
			break;
		case ACTIONS.ON_FIRST_REFLECTION:
			prevState.feelings[0].feelingReflection = data;
			break;
		case ACTIONS.ON_SECOND_REFLECTION:
			prevState.feelings[1].feelingReflection = data;
			break;
		case ACTIONS.ON_THIRD_REFLECTION:
			prevState.feelings[2].feelingReflection = data;
			break;
		case ACTIONS.DATA_FROM_GLOBAL_STATE:
			console.log('step three global state');
			prevState = {
				feelings: [
					{ id: 1, feelingContent: '', feelingReflection: '' },
					{ id: 2, feelingContent: '', feelingReflection: '' },
					{ id: 3, feelingContent: '', feelingReflection: '' },
				],
			};
			prevState.isLoading = false;
			break;
		case ACTIONS.DATA_FROM_SERVER:
			console.log('stepthree reducer', data);
			const newState = {
				feelings: [...data],
			};
			prevState = newState;
			prevState.isLoading = false;
			break;
		default:
		//return prevState;
	}
	return prevState;
}
