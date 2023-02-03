import uniqueId from 'lodash.uniqueid';
import { DEFAULT_TAGS_DATA } from '../../../../data/step-four/defaultData';
export const INITIAL_STATE = {
	tags: DEFAULT_TAGS_DATA,
	tagTitle: '',
	dataIsLoading: true,
};

export const ACTIONS = {
	CHANGE_TITLE: 'title_change',
	TOGGLE_SELECT: 'toggle_select',
	ADD_NEW_TAG: 'add_new_tag',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
};

export default function reducer(state, action) {
	const type = action.type;
	const data = action.payload.data;

	const prevState = { ...state };

	switch (type) {
		case ACTIONS.ADD_NEW_TAG:
			let newId = uniqueId();
			const newTag = {
				id: newId,
				title: prevState.tagTitle,
				status: 'not_selected',
			};
			prevState.tags = [...prevState.tags, newTag];
			prevState.tagTitle = '';
			break;
		case ACTIONS.CHANGE_TITLE:
			prevState.tagTitle = data;
			break;
		case ACTIONS.TOGGLE_SELECT:
			if (data.status === 'selected') {
				prevState.tags.map((tag) => {
					if (tag.id === data.id) {
						tag['status'] = 'not_selected';
					}
					return tag;
				});
			} else {
				prevState.tags.map((tag) => {
					if (tag.id === data.id) {
						tag['status'] = 'selected';
					}
					return tag;
				});
			}

			break;
		case ACTIONS.DATA_FROM_SERVER:
			//console.log(action);
			prevState['tags'] = data;
			prevState.tags.map((tag) => {
				tag['id'] = tag._id;
				return tag;
			});
			prevState.dataIsLoading = false;
			break;
		case ACTIONS.DATA_FROM_LOCAL_STATE:
			prevState.tags = [
				{
					id: '123',
					title: 'Watch a Comedy',
					status: 'selected',
				},
				{ id: '453', title: 'Go to sleep early', status: 'not_selected' },
				{
					id: '323',
					title: 'Weighted blanket',
					status: 'not_selected',
				},
				{
					id: '562',
					title: 'Go to a movie',
					status: 'not_selected',
				},
				{
					id: '531',
					title: 'Ride a bike',
					status: 'not_selected',
				},
			];
			prevState.dataIsLoading = false;
			break;
		default:
		//return prevState;
	}
	return prevState;
}
