import React from 'react';
import DialogUsersItem from './DialogUsersItem/DialogUsersItem';
import cl from './DialogUsers.module.css'


const DialogUsers = (props) => {
	let users = props.state.map((user)=>(
		<DialogUsersItem id={user.id} name={user.name} pic={user.pic}/>
	))
	return (
		<div className={cl.users}>
			{users}
		</div>
	);
};

export default DialogUsers;