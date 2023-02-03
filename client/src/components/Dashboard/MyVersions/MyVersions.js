import React from 'react';
import classes from './MyVersions.module.css';

const MyVersions = (props) => {
	return <div className={classes['my-versions']}>{props.children}</div>;
};

export default MyVersions;
