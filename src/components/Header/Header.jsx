import React from 'react';
import cl from'./Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={cl.header}>
			<img src='https://w7.pngwing.com/pngs/402/203/png-transparent-picasa-encapsulated-postscript-logo-random-icons-miscellaneous-angle-text.png'/>
			<div className={cl.loginBlock}>
				{props.isAuth ? props.login
				:<NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;