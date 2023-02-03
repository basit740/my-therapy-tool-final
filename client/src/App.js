import { useContext } from 'react';

import Layout from './components/Layout/Layout.js';
import LandingPage from './components/LandingPage/LandingPage.js';

import Version from './components/Dashboard/Version/Version.js';
import NewJourney from './components/Dashboard/NewJourney/NewJourney.js';

//import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import SignUpIn from './components/Auth/SignUpIn.js';

import Dashboard from './components/Dashboard/Dashboard.js';
import Settings from './components/Settings/Settings.js';
import About from './components/About/About';
import Contact from './components/Contact/Contact.js';

import AuthContext from './store/auth-context.js';
import { Routes, Route } from 'react-router-dom';
//import PrivateNoMatch from './components/PrivateNoMatch/PrivateNoMatch.js';
import UserProfile from './components/Profile/Profile.js';
import LastPage from './components/LastPage/LastPage.js';
import ForgotPassword from './components/Public/ForgotPassword/ForgotPassword.js';

library.add(faCheck);

function App() {
	//let component = null;

	let authCtx = useContext(AuthContext);

	return (
		<Routes>
			{!authCtx.isLoggedIn && (
				<Route path='/auth' element={<SignUpIn />}></Route>
			)}

			<Route path='/' element={<SignUpIn />}></Route>
			<Route path='/auth/forgotpassword' element={<ForgotPassword />}></Route>
			{authCtx.isLoggedIn && (
				<>
					<Route path='/' element={<Layout />}>
						<Route index element={<UserProfile />}></Route>

						{/* <Route path='*' element={<PrivateNoMatch />} /> */}

						<Route path='/welcome' element={<LandingPage />}></Route>
						<Route path='/lastpage' element={<LastPage />}></Route>

						<Route path='/dashboard' element={<Dashboard />}>
							<Route index element={<Version />}></Route>
							<Route
								path='/dashboard/newjourney'
								element={<NewJourney />}
							></Route>
						</Route>
						<Route path='/settings' element={<Settings />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
					</Route>
				</>
			)}
		</Routes>
	);
}

export default App;
