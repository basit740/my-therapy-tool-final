export const initialState = {
	contacts: [
		{ id: '1', contactDetail: '' },
		{ id: '2', contactDetail: '' },
		{ id: '3', contactDetail: '' },
	],
	isLoading: true,
};

export const ACTIONS = {
	ENTER_TEXT: 'enter_text',
	ADD_CONTACT: 'add_contact',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
};

export default function reducer(state, action) {
	const pState = { ...state };
	switch (action.type) {
		case ACTIONS.ENTER_TEXT:
			const id = action.payload.id;
			const value = action.payload.value;
			pState.contacts.map((ct) => {
				if (ct.id === id) {
					ct.contactDetail = value;
				}
				return null;
			});
			break;
		case ACTIONS.ADD_CONTACT:
			pState['contacts'] = [
				...pState.contacts,
				{
					id: Math.random().toString(36).substring(2),
					contactDetail: '',
				},
			];
			break;
		case ACTIONS.DATA_FROM_SERVER:
			pState['contacts'] = action.payload.data;
			pState.contacts.map((ct) => {
				ct['id'] = ct._id;
				return null;
			});
			pState.isLoading = false;
			break;
		case ACTIONS.DATA_FROM_LOCAL_STATE:
			pState['contacts'] = [
				{ id: '1', contactDetail: '' },
				{ id: '2', contactDetail: '' },
				{ id: '3', contactDetail: '' },
			];
			pState.isLoading = false;
			break;

		default:
		//
	}

	return pState;
}
