import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './Dashboard.module.css'

// import Version from './Version/Version';

// New Journey
// import NewJourney from './NewJourney/NewJourney';

// import MyProgress from './MyProgress';

const Dashboard = () => {
	// const [newVersion, setNewVersion] = useState(false);
	return (
		<section className={classes['dashboard']}>
			<Outlet />
		</section>
	);
};

export default Dashboard;
