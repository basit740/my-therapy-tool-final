import React from 'react';
// import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
const Footer = () => {
	return (
		<div className={classes['footer']}>
			<div className={classes['footer-left']}>
				@ <strong>My Therapy Tool </strong>
				<span>All Right Reserved</span>
			</div>
			<div className={classes['footer-right']}>
				{/* <Link to='/reviews'>REVIEWS</Link>
				<Link to='/about'>ABOUT</Link>
				<Link to='/blog'>BLOG</Link>
				<Link to='/updates'>UPDATES</Link> */}
			</div>
		</div>
	);
};

export default Footer;
