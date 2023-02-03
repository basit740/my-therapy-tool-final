//enum: ['likely', 'real', 'probably', 'unrealistic'],

export const ACTIONS = {
	DROP_ON_FIRST: 'drop_on_first',
	DROP_ON_SECOND: 'drop_on_second',
	DROP_ON_THIRD: 'drop_on_third',
	DROP_ON_FOURTH: 'drop_on_fourth',
	DRAGGING: 'dragging',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
	SET_DATA_LOADING: 'set_data_loading',
	ADD_NEW_THOUGHT: 'add_new_thought',
	DELETE_THOUGHT: 'delete_thought',
};
export default function reducer(state, action) {
	console.log('action', action);
	//let id = state.dragId;
	// let dragSrc = action.payload.dragSourceId;

	let prevState = { ...state };
	let thought = null;
	//let data = null;

	switch (action.type) {
		case ACTIONS.ADD_NEW_THOUGHT:
			switch (action.payload.cardId) {
				case '1':
					prevState.thoughts.first = [
						...prevState.thoughts.first,
						action.payload.newThought,
					];
					break;
				case '2':
					prevState.thoughts.second = [
						...prevState.thoughts.second,
						action.payload.newThought,
					];
					break;
				case '3':
					prevState.thoughts.third = [
						...prevState.thoughts.third,
						action.payload.newThought,
					];
					break;
				default:
					prevState.thoughts.fourth = [
						...prevState.thoughts.fourth,
						action.payload.newThought,
					];
			}
			break;
		case ACTIONS.DELETE_THOUGHT:
			let filtered = null;
			switch (action.payload.cardId) {
				case '1':
					filtered = prevState.thoughts.first.filter(
						(thg) => thg.id !== action.payload.thoughtId
					);
					prevState.thoughts.first = [...filtered];
					break;
				case '2':
					filtered = prevState.thoughts.second.filter(
						(thg) => thg.id !== action.payload.thoughtId
					);
					prevState.thoughts.second = [...filtered];
					break;
				case '3':
					filtered = prevState.thoughts.third.filter(
						(thg) => thg.id !== action.payload.thoughtId
					);
					prevState.thoughts.third = [...filtered];
					break;
				default:
					filtered = prevState.thoughts.fourth.filter(
						(thg) => thg.id !== action.payload.thoughtId
					);
					prevState.thoughts.fourth = [...filtered];
			}
			break;
		case ACTIONS.DRAGGING:
			prevState.dragId = action.payload.dragId;
			prevState.dragSrcId = action.payload.dragSrcId;
			break;
		case ACTIONS.DROP_ON_FIRST:
			if (prevState.dragSrcId === '2') {
				thought = prevState.thoughts.second.find((thg) => {
					return thg.id === prevState.dragId;
				});
				prevState.thoughts.second = prevState.thoughts.second.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else if (state.dragSrcId === '3') {
				thought = prevState.thoughts.third.find(
					(thg) => thg.id === prevState.dragId
				);
				prevState.thoughts.third = prevState.thoughts.third.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else {
				thought = prevState.thoughts.fourth.find(
					(thg) => thg.id === prevState.dragId
				);
				prevState.thoughts.fourth = prevState.thoughts.fourth.filter(
					(thg) => thg.id !== prevState.dragId
				);
			}
			prevState.thoughts.first = [...prevState.thoughts.first, thought];
			break;
		case ACTIONS.DROP_ON_SECOND:
			if (prevState.dragSrcId === '1') {
				thought = prevState.thoughts.first.find((thg) => {
					return thg.id === prevState.dragId;
				});
				prevState.thoughts.first = prevState.thoughts.first.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else if (state.dragSrcId === '3') {
				thought = prevState.thoughts.third.find(
					(thg) => thg.id === prevState.dragId
				);
				prevState.thoughts.third = prevState.thoughts.third.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else {
				thought = prevState.thoughts.fourth.find(
					(thg) => thg.id === prevState.dragId
				);
				prevState.thoughts.fourth = prevState.thoughts.fourth.filter(
					(thg) => thg.id !== prevState.dragId
				);
			}
			prevState.thoughts.second = [...prevState.thoughts.second, thought];
			break;
		case ACTIONS.DROP_ON_THIRD:
			if (prevState.dragSrcId === '1') {
				thought = prevState.thoughts.first.find((thg) => {
					return thg.id === prevState.dragId;
				});
				prevState.thoughts.first = prevState.thoughts.first.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else if (state.dragSrcId === '2') {
				thought = prevState.thoughts.second.find((thg) => {
					return thg.id === prevState.dragId;
				});
				prevState.thoughts.second = prevState.thoughts.second.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else {
				thought = prevState.thoughts.fourth.find(
					(thg) => thg.id === prevState.dragId
				);
				prevState.thoughts.fourth = prevState.thoughts.fourth.filter(
					(thg) => thg.id !== prevState.dragId
				);
			}
			prevState.thoughts.third = [...prevState.thoughts.third, thought];
			break;

		case ACTIONS.DROP_ON_FOURTH:
			if (prevState.dragSrcId === '1') {
				thought = prevState.thoughts.first.find((thg) => {
					return thg.id === prevState.dragId;
				});
				prevState.thoughts.first = prevState.thoughts.first.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else if (state.dragSrcId === '2') {
				thought = prevState.thoughts.second.find((thg) => {
					return thg.id === prevState.dragId;
				});
				prevState.thoughts.second = prevState.thoughts.second.filter(
					(thg) => thg.id !== prevState.dragId
				);
			} else {
				thought = prevState.thoughts.third.find(
					(thg) => thg.id === prevState.dragId
				);
				prevState.thoughts.third = prevState.thoughts.third.filter(
					(thg) => thg.id !== prevState.dragId
				);
			}
			prevState.thoughts.fourth = [...prevState.thoughts.fourth, thought];
			break;

		case ACTIONS.DATA_FROM_SERVER:
			//working on data from server
			prevState.thoughts.first = [];
			prevState.thoughts.second = [];
			prevState.thoughts.third = [];
			prevState.thoughts.fourth = [];

			action.payload.data.map((thg) => {
				switch (thg.thoughtCategory) {
					case 'likely':
						prevState.thoughts.first = [...prevState.thoughts.first, thg];
						break;
					case 'real':
						prevState.thoughts.second = [...prevState.thoughts.second, thg];
						break;
					case 'probably':
						prevState.thoughts.third = [...prevState.thoughts.third, thg];
						break;
					default:
						prevState.thoughts.fourth = [...prevState.thoughts.fourth, thg];
				}
				thg['thgContent'] = thg.thoughtContent;
				thg['id'] = thg._id;
				return null;
			});
			prevState.dataLoading = false;
			break;
		case ACTIONS.DATA_FROM_LOCAL_STATE:
			prevState = {
				thoughts: {
					first: [],
					second: [],
					third: [],
					fourth: [],
				},
				dragId: null,
				dragSrcId: null,
				dataLoading: false,
			};
			break;

		default:
		//
	}
	return prevState;
}
