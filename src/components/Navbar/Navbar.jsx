import React from 'react';
import cl from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import FriendsList from './FriendsList/FriendsList';
import FriendsListContainer from './FriendsList/FriendsListContainer'

const Navbar = (props) => {
	return (
		<nav className={cl.nav}>
			<div className={cl.item}><NavLink to='/profile' className={({isActive})=>isActive? `${cl.active}` : ''}>Profile</NavLink></div>
			<div className={cl.item}><NavLink to='/messages' className={({isActive})=>isActive? `${cl.active}` : ''}>Messages</NavLink></div>
			<div className={cl.item}><NavLink to='/news' className={({isActive})=>isActive? `${cl.active}` : ''}>News</NavLink></div>
			<div className={cl.item}><NavLink to='/music' className={({isActive})=>isActive? `${cl.active}` : ''}>Music</NavLink></div>
			<div className={cl.item}><NavLink to='/settings' className={({isActive})=>isActive? `${cl.active}` : ''}>Settings</NavLink></div>
			<FriendsListContainer/>
	  </nav>
	);
};

export default Navbar;