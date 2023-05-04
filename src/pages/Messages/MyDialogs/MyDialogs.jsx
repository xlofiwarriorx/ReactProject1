import React from 'react';
import cl from './MyDialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogUsers from './DialogUsers/DialogUsers';
import DialogChats from './DialogChats/DialogChats';

const Mydialogs = (props) => {
	return (
		<div className={cl.columns}>
			{/* <DialogUsers state = {props.state} dialogsData = {props.dialogsData} className={cl.users}/> */}
			<DialogUsers state = {props.state} className={cl.users}/>
			<DialogChats  state = {props.state} className={cl.messages}/>
			{/* <DialogChats  state = {props.store.getState} className={cl.messages} messagesData={props.messagesData}/> */}
		</div>
	);
};

export default Mydialogs;