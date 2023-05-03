import React from 'react';
import cl from './ChatItem.module.css'

const ChatItem = (props) => {
	return (
		<div className={cl['messages-item']}>
			<div>
				<img className={cl.pic} src={props.pic}/>
			</div>
			<div>
				{props.message}
			</div>
			</div>
	);
};

export default ChatItem;