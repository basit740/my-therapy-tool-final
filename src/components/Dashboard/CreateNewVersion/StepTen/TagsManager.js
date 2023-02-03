import React from 'react';
import classes from './StepTen.module.css';
import AddNewTag from './AddNewTag';
import Loading from './Loading';

import Tag from '../../Shapes/UI/Tag';
const TagsManager = ({
	onTitleChange,
	tagTitle,
	tags,
	onNewTag,
	onSelectToggle,
	tagCateogory,
	isLoading,
}) => {
	const addCategory = () => {
		onNewTag(tagCateogory);
	};
	return (
		<>
			<AddNewTag
				onNewTag={addCategory}
				onTitle={onTitleChange}
				tagTitle={tagTitle}
			/>

			<br />

			<div className={classes.selectedTextArea}>
				{/* {state.dataIsLoading && <Loading />} */}
				{isLoading && <Loading />}
				{!isLoading && tags.length > 0 ? (
					tags.map((obj, i) => (
						<Tag
							key={obj.id}
							title={obj.tagTitle}
							id={obj.id}
							status={obj.status}
							onClick={onSelectToggle}
						/>
					))
				) : (
					<div></div>
				)}
			</div>
		</>
	);
};

export default TagsManager;
