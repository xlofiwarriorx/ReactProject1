import React from 'react';
import cl from './FriendItem.module.css'

const FriendItem = (props) => {
	return (
		<div className={cl.item}>
			<div>
				<img className={cl.pic} src={props.pic} alt="" />
			</div>
			<div>
				{props.name}
			</div>
		</div>
	);
};

export default FriendItem;