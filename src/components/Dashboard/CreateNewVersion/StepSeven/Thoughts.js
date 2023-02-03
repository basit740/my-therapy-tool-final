import React, {
	useEffect,
	useReducer,
	useContext,
	useState,
	useRef,
} from 'react';
import classes from './Thoughts.module.css';
import ThoughtCard from './ThoughtCard';

//import Thought from './Thought';
import uniqueId from 'lodash.uniqueid';
import reducer, { ACTIONS } from './reducer';

import { getThoughts } from '../../../../api/stepSeven';
import NewVersionContext from '../../../../store/new-version-context';

const EMPTY_ARRAY = [];

const initialState = {
	thoughts: {
		first: [],
		second: [],
		third: [],
		fourth: [],
	},
	dragId: null,
	dragSrcId: null,
	dataLoading: true,
};

const Thoughts = ({ onStateChange }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const [thgContent, setThgContent] = useState('');
	//const [newThg, setNewThg] = useState(null);

	const newVerCtx = useContext(NewVersionContext);

	const inputRef = useRef();

	////////////////////////////////////// HELPER FUNCTIONS       /////////////////////

	/////////////////////////////////// NATIVE ADD AND DELETE FUNCTIONALITY FOR ITEMS ///////////

	// const newThoughtHandler = (newThought) => {
	// 	dispatch({
	// 		type: ACTIONS.ADD_NEW_THOUGHT,
	// 		payload: {
	// 			newThought: newThg,
	// 			cardId: newThg.cardId,
	// 		},
	// 	});
	// };

	const newThoughtHandler = () => {
		console.log('testing');
	};

	const deleteThgHandler = (event) => {
		console.log(event.target.id);
		const CARD_ID = event.target.getAttribute('parentId');
		console.log('parent Card id', CARD_ID);

		dispatch({
			type: ACTIONS.DELETE_THOUGHT,
			payload: {
				cardId: CARD_ID,
				thoughtId: event.target.id,
			},
		});

		// if (CARD_ID == 1) {
		// 	setFirstThoughts(filterThoughts(1, event.target.id));
		// } else if (CARD_ID == 2) {
		// 	setSecondThoughts(filterThoughts(2, event.target.id));
		// } else if (CARD_ID == 3) {
		// 	setThirdThoughts(filterThoughts(3, event.target.id));
		// } else {
		// 	setFourthThoughts(filterThoughts(4, event.target.id));
		// }
	};

	const dragStartHandler = (event) => {
		console.log('drag is started', event.target.parentNode.id);
		event.target.classList.add('dragging');

		dispatch({
			type: ACTIONS.DRAGGING,
			payload: {
				dragId: event.target.id,
				dragSrcId: event.target.parentNode.id,
			},
		});
	};

	const dragEndHandler = (event) => {
		event.target.classList.remove('dragging');
	};

	const dropHandler = (event) => {
		event.preventDefault();
		//const element = document.querySelector('.dragging');
		console.log('drop end', event.target.id);

		if (event.target.id === state.dragSrcId) {
			// check if already exists
			return;
		}

		switch (event.target.id) {
			case '1':
				dispatch({
					type: ACTIONS.DROP_ON_FIRST,
				});
				break;
			case '2':
				dispatch({
					type: ACTIONS.DROP_ON_SECOND,
				});
				break;
			case '3':
				dispatch({
					type: ACTIONS.DROP_ON_THIRD,
				});
				break;

			default:
				dispatch({
					type: ACTIONS.DROP_ON_FOURTH,
				});
		}
	};

	const allowDrop = (event) => {
		console.log('dragging over element');
		event.preventDefault();
	};

	const submitHandler = (event) => {
		event.preventDefault();
		let newThought = {
			id: 'thg_' + uniqueId(),
			thgContent: thgContent,
			cardId: '1',
		};

		//console.log(newThought);
		//setNewThg(newThought);

		dispatch({
			type: ACTIONS.ADD_NEW_THOUGHT,
			payload: {
				newThought: newThought,
				cardId: newThought.cardId,
			},
		});

		setThgContent('');
		// props.onNewThought(newThought);
		// inputRef.current.innerHTML = '';
	};

	useEffect(() => {
		onStateChange(state);
	}, [state, onStateChange]);

	useEffect(() => {
		(async () => {
			const response = await getThoughts(newVerCtx.versionId);

			if (response.success && response.data.length > 0) {
				dispatch({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: { data: response.data },
				});
			} else {
				dispatch({ type: ACTIONS.DATA_FROM_LOCAL_STATE });
			}
		})();
	}, [newVerCtx.versionId]);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<>
			<div className={classes['step-seven-action']}>
				<form onSubmit={submitHandler}>
					<input
						type='text'
						placeholder='describe your thought'
						onChange={(e) => setThgContent(e.target.value)}
						value={thgContent}
						ref={inputRef}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
			<div className={classes['thought-cards-container']}>
				<div className={classes['container']}>
					<div className={classes['row']}>
						<div className={classes['col']}>
							<ThoughtCard
								key='1'
								id='1'
								title='Very likely or Real'
								thoughts={
									state.dataLoading ? EMPTY_ARRAY : state.thoughts.first
								}
								onDragStart={dragStartHandler}
								onDragEnd={dragEndHandler}
								onDrop={dropHandler}
								onDragOver={allowDrop}
								onDelete={deleteThgHandler}
							/>
						</div>
						<div className={classes['col']}>
							<ThoughtCard
								key='2'
								id='2'
								title='somewhat likely or real'
								thoughts={
									state.dataLoading ? EMPTY_ARRAY : state.thoughts.second
								}
								onNewThought={newThoughtHandler}
								onDragStart={dragStartHandler}
								onDragEnd={dragEndHandler}
								onDrop={dropHandler}
								onDragOver={allowDrop}
								onDelete={deleteThgHandler}
							/>
						</div>
						<div className={classes['col']}>
							<ThoughtCard
								key='3'
								id='3'
								title='Probably not or unrealistic'
								thoughts={
									state.dataLoading ? EMPTY_ARRAY : state.thoughts.third
								}
								onNewThought={newThoughtHandler}
								onDragStart={dragStartHandler}
								onDragEnd={dragEndHandler}
								onDrop={dropHandler}
								onDragOver={allowDrop}
								onDelete={deleteThgHandler}
							/>
						</div>
						<div className={classes['col']}>
							<ThoughtCard
								key='4'
								id='4'
								title='Highly unlikey or unrealistic'
								thoughts={
									state.dataLoading ? EMPTY_ARRAY : state.thoughts.fourth
								}
								onNewThought={newThoughtHandler}
								onDragStart={dragStartHandler}
								onDragEnd={dragEndHandler}
								onDrop={dropHandler}
								onDragOver={allowDrop}
								onDelete={deleteThgHandler}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
		// <div className='thought-cards-container'>

		// </div>
	);
};
export default Thoughts;
