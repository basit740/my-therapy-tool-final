export const ACTIONS = {
	FIRST_ACTION: 'first_action',
	SECOND_ACTION: 'second_action',
	THIRD_ACTION: 'third_action',
	FIRST_DATE: 'first_date',
	SECOND_DATE: 'second_date',
	THIRD_DATE: 'third_date',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
};

export const initialState = {
	actions: [
		{
			actionContent: '',
			actionDate: undefined,
		},
		{
			actionContent: '',
			actionDate: undefined,
		},
		{
			actionContent: '',
			actionDate: undefined,
		},
	],
};

export default function reducer(state, action) {
	const type = action.type;
	let data = null;
	let value = null;
	if (action.payload.value) {
		value = action.payload.value;
	} else {
		data = action.payload.data;
	}
	//const value = action.payload.value;
	const pState = { ...state };

	switch (type) {
		case ACTIONS.FIRST_ACTION:
			pState.actions[0].actionContent = value;
			break;
		case ACTIONS.SECOND_ACTION:
			pState.actions[1].actionContent = value;
			break;
		case ACTIONS.THIRD_ACTION:
			pState.actions[2].actionContent = value;
			break;
		case ACTIONS.FIRST_DATE:
			pState.actions[0].actionDate = value;
			break;
		case ACTIONS.SECOND_DATE:
			pState.actions[1].actionDate = value;
			break;
		case ACTIONS.THIRD_DATE:
			pState.actions[2].actionDate = value;
			break;
		case ACTIONS.DATA_FROM_SERVER:
			pState['actions'] = [...data];
			pState.actions.map((act) => {
				act['id'] = act._id;

				let date = new Date(act.actionDate);
				act.actionDate = date.toISOString().substring(0, 10);
				return act;
			});
			break;
		case ACTIONS.DATA_FROM_LOCAL_STATE:
			pState['actions'] = [
				{
					actionContent: '',
					actionDate: undefined,
				},
				{
					actionContent: '',
					actionDate: undefined,
				},
				{
					actionContent: '',
					actionDate: undefined,
				},
			];
			break;
		default:
		//do nothing
	}

	return pState;
}
