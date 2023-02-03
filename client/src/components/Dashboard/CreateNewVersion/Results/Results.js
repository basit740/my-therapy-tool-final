import React from 'react';
import classes from './Results.module.css';
const Results = () => {
	return (
		<section className={classes.results}>
			<div className={classes['picture-circle']}></div>
			<h4>Congratulations! You made it to the end of you Verion!</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur
				voluptatum similique.
			</p>
		</section>
	);
};
export default Results;
