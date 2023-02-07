import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import classes from './Header.module.css';

const Header = () => {
	const authCtx = useContext(AuthContext);
	const navigate = useNavigate();

	const logoutHandler = (event) => {
		event.preventDefault();

		authCtx.logout();
		navigate('/auth', { replace: true });
	};
	return (
		<header>
			<nav>
				<div className={classes['brand']}>
					<div className={classes['logo-dot']}></div>
					<NavLink to='/' className={classes['brand-link']}>
						<h4>My Therapy Tool</h4>{' '}
						<span style={{ color: 'blue', fontSize: '11px' }}>
							Beta Version
						</span>
					</NavLink>
				</div>

				<div className={classes['nav-links']}>
					<NavLink
						to='/dashboard'
						style={({ isActive }) => {
							return {
								color: isActive ? 'black' : '',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						Dashboard
					</NavLink>
					{/* <NavLink
						to='/settings'
						style={({ isActive }) => {
							return {
								color: isActive ? 'black' : '',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						Settings
					</NavLink> */}
					<NavLink
						to='/contact'
						style={({ isActive }) => {
							return {
								color: isActive ? 'black' : '',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						Contact
					</NavLink>
					<NavLink
						to='/about'
						style={({ isActive }) => {
							return {
								color: isActive ? 'black' : '',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						About
					</NavLink>

					<NavLink
						className={classes['logout-link']}
						onClick={logoutHandler}
						to='/logout'
						style={({ isActive }) => {
							return {
								color: isActive ? 'black' : '',
								borderBottom: isActive ? '3px solid black' : '',
							};
						}}
					>
						Logout
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
