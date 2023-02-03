import React from 'react';
import './ThoughtCard.css';
// import uniqueId from 'lodash.uniqueid';

import Thought from './Thought';
const ThoughtCard = (props) => {
	// const [thoughtContent, setThoughtContent] = useState('');
	// const [isShown, setIsShown] = useState(false);

	//const [thoughts, setThoughts] = useState([]);
	// const [trigger, setTrigger] = useState(false);

	// const thoughtContentHandler = (event) => {
	// 	setThoughtContent(event.target.value);
	// };
	// const inputShowHideHandler = () => {
	// 	setIsShown(true);
	// 	inputRef.current.focus();
	// };

	// const submitHandler = (event) => {
	// 	//alert('something');
	// 	console.log(event.target.cardId);

	// 	if (trigger) {
	// 		setTrigger(false);
	// 	} else {
	// 		setTrigger(true);
	// 	}
	// 	event.preventDefault();
	// 	let newThought = {
	// 		id: 'thg_' + uniqueId(),
	// 		thgContent: thoughtContent,
	// 		cardId: props.id,
	// 	};
	// 	props.onNewThought(newThought);
	// 	inputRef.current.innerHTML = '';
	// };

	return (
		<div className='thought-card-container'>
			<div style={{ fontSize: '1rem' }}>{props.title}</div>
			<span>{props.thoughts.length}</span>
			<div
				className='thougth-card'
				id={props.id}
				onDrop={props.onDrop}
				onDragOver={props.onDragOver}
			>
				{/* all thoughtItems are */}
				{props.thoughts.map((thg) => {
					return (
						<Thought
							draggable='true'
							onDragStart={props.onDragStart}
							onDragEnd={props.onDragEnd}
							thoughtContent={thg.thgContent}
							key={thg.id}
							id={thg.id}
							onDelete={props.onDelete}
							parentId={props.id}
						/>
					);
				})}
				{/* <div className='add-button-thought'>
					<div className='plus-icon' onClick={() => setIsShown(true)}>
						+
					</div>{' '}
					<div>Add</div>
				</div> */}

				{/* {isShown && (
					<form onSubmit={submitHandler}>
						<input
							type='text'
							placeholder='describe your thought'
							onChange={thoughtContentHandler}
							value={props.newThought}
							ref={inputRef}
						/>
					</form>
				)} */}
			</div>
		</div>
	);
};

export default ThoughtCard;
