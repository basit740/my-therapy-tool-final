import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import classes from './Header.module.css';

import { stack as Menu } from 'react-burger-menu';

// var styles = {
// 	bmBurgerButton: {
// 		position: 'fixed',
// 		width: '36px',
// 		height: '30px',
// 		left: '15px',
// 		top: '20px',
// 	},
// 	bmBurgerBars: {
// 		background: '#373a47',
// 	},
// 	bmBurgerBarsHover: {
// 		background: '#a90000',
// 	},
// 	bmCrossButton: {
// 		height: '30px',
// 		width: '30px',
// 	},
// 	bmCross: {
// 		background: '#bdc3c7',
// 	},
// 	bmMenuWrap: {
// 		position: 'fixed',
// 		height: '100%',
// 	},
// 	bmMenu: {
// 		background: 'white',
// 		padding: '2.5em 1.5em 0',
// 		fontSize: '1.15em',
// 	},
// 	bmMorphShape: {
// 		fill: '#373a47',
// 	},
// 	bmItemList: {
// 		color: '',
// 		padding: '0.8em',
// 	},
// 	bmItem: {
// 		display: 'block',
// 	},
// 	bmOverlay: {
// 		background: 'rgba(0, 0, 0, 0.3)',
// 	},
// };

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
				<Menu width={150} isOpen={false}>
					<Link
						style={{
							display: 'block',
						}}
						to='/dashboard'
						className='menu-item'
					>
						Dashboard
					</Link>
					{/* <Link
						style={{
							display: 'block',
						}}
						to='/settings'
					>
						Settings
					</Link> */}
					<Link to='/contact'>Contact</Link>
					<Link to='/about'>About</Link>
					<Link to='/logout' onClick={logoutHandler}>
						Logout
					</Link>
				</Menu>
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
