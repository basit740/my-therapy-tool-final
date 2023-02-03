import React from 'react';
import classes from './FeelingCard.module.css';
import Feeling from './Feeling.js';
import Loading from './Loading';

const FeelingCard = ({
	feelings,
	id,
	onDragStart,
	onDragEnd,
	onDrop,
	onDragOver,
	isLoading,
}) => {
	console.log('feeliongs', feelings);
	//const [feeling, setFeelings] = useState(feelings);

	// const updateFeelings = (item) => {
	// 	let prevArray = feelings;

	// 	let result = prevArray.some((prevItem) => {
	// 		return prevItem.id === item.id;
	// 	});
	// 	if (result) {
	// 		console.log(feelings);
	// 		console.log('already found');
	// 		return;
	// 	}
	// };
	return (
		<>
			<div
				className={classes['feeling-card']}
				id={id}
				onDrop={onDrop}
				onDragOver={onDragOver}
			>
				{isLoading && <Loading />}

				{feelings.length > 0 &&
					feelings.map((feeling) => {
						return (
							<Feeling
								key={feeling.id}
								id={feeling.id}
								feelingTitle={feeling.issueTitle}
								onDragStart={onDragStart}
								onDragEnd={onDragEnd}
							></Feeling>
						);
					})}
			</div>
		</>
	);
};
export default FeelingCard;
