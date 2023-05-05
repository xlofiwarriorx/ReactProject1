import React from 'react';
import cl from './DialogChats'
import ChatItem from './ChatItem/ChatItem';




const DialogChats = (props) => {

	let chats = props.state.dialogs.users.map((chat)=>(
		<ChatItem message={chat.message} pic={chat.pic}/>
	))
	return (
		<div >
			{chats}
	</div>
	);
};

export default DialogChats;