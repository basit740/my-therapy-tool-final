import uniqueId from 'lodash.uniqueid';
import { DEFAULT_TAGS_DATA } from '../../../../data/step-four/defaultData';

// import {
// 	DEFAULT_TAGS_SECOND,
// 	DEFAULT_TAGS_FIRST,
// 	DEFAULT_TAGS_THIRD,
// } from '../../../../data/step-ten/defaultData';
export const INITIAL_STATE = {
	tags: DEFAULT_TAGS_DATA,
	firstTags: DEFAULT_TAGS_DATA,
	secondTags: DEFAULT_TAGS_DATA,
	thirdTags: DEFAULT_TAGS_DATA,
	tagTitleFirst: '',
	tagTitleSecond: '',
	tagTitleThird: '',
	isLoading: true,
};

export const ACTIONS = {
	CHANGE_TITLE_FIRST: 'change_title_first',
	CHANGE_TITLE_SECOND: 'change_title_second',
	CHANGE_TITLE_THIRD: 'change_title_third',
	TOGGLE_SELECT: 'toggle_select',
	ADD_NEW_TAG: 'add_new_tag',
	ADD_NEW_TAG_FIRST: 'add_new_tag_first',
	ADD_NEW_TAG_SECOND: 'add_new_tag_second',
	ADD_NEW_TAG_THIRD: 'add_new_tag_third',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
};

export default function reducer(state, action) {
	const type = action.type;
	const data = action.payload.data;

	const prevState = { ...state };

	switch (type) {
		case ACTIONS.CHANGE_TITLE:
			prevState.tagTitle = data;
			break;
		case ACTIONS.CHANGE_TITLE_FIRST:
			prevState.tagTitleFirst = action.payload.tagTitle;
			break;
		case ACTIONS.CHANGE_TITLE_SECOND:
			prevState.tagTitleSecond = action.payload.tagTitle;
			break;
		case ACTIONS.CHANGE_TITLE_THIRD:
			console.log(state, action);
			prevState.tagTitleThird = action.payload.tagTitle;
			break;

		case ACTIONS.ADD_NEW_TAG_FIRST:
			if (prevState.tagTitleFirst.trim() === '') {
				return prevState;
			}
			let newId = uniqueId();
			const newTag = {
				id: newId,
				tagTitle: prevState.tagTitleFirst,
				tagCategory: action.payload.tagCategory,
				status: 'not_selected',
			};

			prevState.tags = [...prevState.tags, newTag];

			prevState.firstTags = [...prevState.firstTags, newTag];
			prevState.tagTitleFirst = '';
			break;

		case ACTIONS.ADD_NEW_TAG_SECOND:
			if (prevState.tagTitleSecond.trim() === '') {
				return prevState;
			}
			let newId1 = uniqueId();
			const newTag1 = {
				id: newId1,
				tagTitle: prevState.tagTitleSecond,
				tagCategory: action.payload.tagCategory,
				status: 'not_selected',
			};

			prevState.tags = [...prevState.tags, newTag1];

			prevState.secondTags = [...prevState.secondTags, newTag1];
			prevState.tagTitleSecond = '';
			break;

		case ACTIONS.ADD_NEW_TAG_THIRD:
			if (prevState.tagTitleThird.trim() === '') {
				return prevState;
			}
			let newId2 = uniqueId();
			const newTag2 = {
				id: newId2,
				tagTitle: prevState.tagTitleThird,
				tagCategory: action.payload.tagCategory,
				status: 'not_selected',
			};

			prevState.tags = [...prevState.tags, newTag2];

			prevState.thirdTags = [...prevState.thirdTags, newTag2];
			prevState.tagTitleThird = '';
			break;

		case ACTIONS.TOGGLE_SELECT:
			switch (action.payload.tagsManager) {
				case 1:
					if (data.status === 'selected') {
						prevState.firstTags.map((tag) => {
							if (tag.id === data.id) {
								tag['status'] = 'not_selected';
							}
							return null;
						});
					} else {
						prevState.firstTags.map((tag) => {
							if (tag.id === data.id) {
								tag['status'] = 'selected';
							}
							return null;
						});
					}
					break;
				case 2:
					if (data.status === 'selected') {
						prevState.secondTags.map((tag) => {
							if (tag.id === data.id) {
								tag['status'] = 'not_selected';
							}
							return null;
						});
					} else {
						prevState.secondTags.map((tag) => {
							if (tag.id === data.id) {
								tag['status'] = 'selected';
							}
							return null;
						});
					}
					break;

				case 3:
					if (data.status === 'selected') {
						prevState.thirdTags.map((tag) => {
							if (tag.id === data.id) {
								tag['status'] = 'not_selected';
							}
							return null;
						});
					} else {
						prevState.thirdTags.map((tag) => {
							if (tag.id === data.id) {
								tag['status'] = 'selected';
							}
							return null;
						});
					}
					break;
				default:
				//
			}

			break;
		case ACTIONS.DATA_FROM_SERVER:
			//console.log(action);
			// prevState['tags'] = data;
			// prevState.tags.map((tag) => {
			// 	tag['id'] = tag._id;
			// });

			prevState.firstTags = [];
			prevState.secondTags = [];
			prevState.thirdTags = [];

			data.map((tg) => {
				tg['id'] = tg._id;
				if (tg.tagCategory === 'rules') {
					prevState.firstTags = [...prevState.firstTags, tg];
				} else if (tg.tagCategory === 'breakthroughs') {
					prevState.secondTags = [...prevState.secondTags, tg];
				} else {
					prevState.thirdTags = [...prevState.thirdTags, tg];
				}
				return null;
			});
			prevState.isLoading = false;
			break;
		case ACTIONS.DATA_FROM_LOCAL_STATE:
			prevState.tags = [
				{
					id: '123',
					tagTitle: 'Watch a Comedy',
					status: 'selected',
					tagCategory: '',
				},
				{ id: '453', title: 'Go to sleep early', status: 'not_selected' },
				{
					id: '323',
					tagTitle: 'Weighted blanket',
					status: 'not_selected',
					tagCategory: '',
				},
				{
					id: '562',
					tagTitle: 'Go to a movie',
					status: 'not_selected',
					tagCategory: '',
				},
				{
					id: '531',
					tagTitle: 'Ride a bike',
					status: 'not_selected',
					category: '',
				},
			];

			prevState.firstTags = [
				{
					id: '123',
					tagTitle: 'Everything in life is process',
					status: 'not_selected',
					tagCategory: 'rules',
				},
				{
					id: '453',
					tagTitle: 'This situation is temporary',
					status: 'not_selected',
					tagCategory: 'rules',
				},
				{
					id: '323',
					tagTitle: "It doesn't have to be this way",
					status: 'not_selected',
					tagCategory: 'rules',
				},
				{
					id: '562',
					tagTitle: 'I have to let go of what I cannot control',
					status: 'not_selected',
					tagCategory: 'rules',
				},
				{
					id: '531',
					tagTitle: 'I have to have compassion for myself',
					status: 'not_selected',
					tagCategory: 'rules',
				},
				{
					id: '535',
					tagTitle: 'To forgive is a choice',
					status: 'not_selected',
					tagCategory: 'rules',
				},
				{
					id: '539',
					tagTitle: "Don't give anyone the power over you",
					status: 'not_selected',
					tagCategory: 'rules',
				},
				{
					id: '409',
					tagTitle: 'Values will change over time',
					status: 'not_selected',
					tagCategory: 'rules',
				},
			];
			prevState.secondTags = [
				{
					id: '123s',
					tagTitle: 'I have realized that my sister ',
					status: 'not_selected',
					tagCategory: 'breakthroughs',
				},
				{
					id: '453s',
					tagTitle: 'My environment was not conducive to productivity',
					status: 'not_selected',
					tagCategory: 'breakthroughs',
				},
				{
					id: '323s',
					tagTitle:
						'I am a son, a daugheter, a brother, a sister etc - I mean something to someone',
					status: 'not_selected',
					tagCategory: 'breakthroughs',
				},
			];
			prevState.thirdTags = [
				{
					id: '123m',
					tagTitle:
						'Motivation is like bathing; we recommend that you do it daily',
					status: 'not_selected',
					tagCategory: 'realizations',
				},
				{
					id: '453m',
					tagTitle: "Life always offer you second chance; it's called tomorrow",
					status: 'not_selected',
					tagCategory: 'realizations',
				},
				{
					id: '323m',
					tagTitle:
						'For every minute you are angry, you lose sixty seconds of happiness',
					status: 'not_selected',
					tagCategory: 'realizations',
				},
				{
					id: '562m',
					tagTitle:
						"Some people are like clouds, when they go away it's a brighter day",
					status: 'not_selected',
					tagCategory: 'realizations',
				},
				{
					id: '531m',
					tagTitle: 'As they saying goes, when going through hell keep going',
					status: 'not_selected',
					tagCategory: 'realizations',
				},
			];
			prevState.isLoading = false;

			break;
		default:
		//return prevState;
	}
	return prevState;
}
