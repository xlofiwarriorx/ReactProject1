import React from 'react';
import cl from './UserItem.module.css'
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
	return (
		<div>
			<div>
				<NavLink to={'/profile/' + props.id}><img src={props.pic} className={cl.img} alt="userpic" /></NavLink>
			</div>
			<div>{props.name}</div>
		</div>
	);
};

export default UserItem;