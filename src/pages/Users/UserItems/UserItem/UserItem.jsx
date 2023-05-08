import React from 'react';
import cl from './UserItem.module.css'

const UserItem = (props) => {
	return (
		<div>
			<div><img src={props.pic} className={cl.img} alt="userpic" /></div>
			<div>{props.name}</div>
		</div>
	);
};

export default UserItem;