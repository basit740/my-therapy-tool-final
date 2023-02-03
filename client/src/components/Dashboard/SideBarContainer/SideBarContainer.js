import React from 'react';

import classes from './SideBarContainer.module.css';

import SideBar from './SideBar';
const SideBarContainer = () => {
	return (
		<div className={classes['new-journey-container']}>
			<SideBar></SideBar>
		</div>
	);
};

export default SideBarContainer;
