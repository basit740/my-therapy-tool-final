import React, { useState } from 'react';

import classes from './TagsManager.module.css';
import Tag from '../../UI/Tag.js';
import uniqueId from 'lodash.uniqueid';

const TagsManager = (props) => {
	const [tags, setTags] = useState(props.defaultTags);
	const [selectedTags, setSelectedTags] = useState([]);
	const [tagTitle, setTagTitle] = useState('');

	const addToSelected = (item) => {
		if (item.status === 'selected') {
			setSelectedTags((prevTags) => {
				return [...prevTags, item];
			});
		} else {
			let prevTags = selectedTags;
			const filteredTags = prevTags.filter((tag) => tag.id != item.id);
			setSelectedTags((prev) => {
				return [filteredTags];
			});
		}

		props.onSelectedTags(selectedTags);
	};

	const titleTagHandler = (event) => {
		let value = event.currentTarget.value;
		setTagTitle(value);
	};

	const newTagHandler = () => {
		if (tagTitle.trim() === '') {
			console.log('this happend');
			return;
		}
		let newId = uniqueId();
		const ITEM = { id: newId, title: tagTitle, status: 'not_selected' };
		setTags((prevTags) => {
			return [...prevTags, ITEM];
		});
		setTagTitle('');
	};

	return (
		<div className={classes['tags-manager']}>
			<h4>{props.title}</h4>
			<div className={classes['text-area-wrapper']}>
				<textarea
					className={classes['selectedArea']}
					onChange={titleTagHandler}
					value={tagTitle}
				></textarea>
				<div className={classes['add-button']}>
					<div className={classes['plus-icon']} onClick={newTagHandler}>
						+
					</div>{' '}
					<div>Add</div>
				</div>
			</div>

			<h4 style={{ marginBottom: '0', paddingBottom: '0' }}>
				{props.instrucitons}
			</h4>

			<div className={classes['selectedTextArea']}>
				{tags.length > 0 ? (
					tags.map((obj, i) => (
						<Tag title={obj.title} id={obj.id} onClick={addToSelected} />
					))
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
};

export default TagsManager;
