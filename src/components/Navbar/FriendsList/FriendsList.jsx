import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import cl from './FriendsList.module.css'

const FriendsList = (props) => {
	let friends = props.state.map((elem)=>(
		<FriendItem name={elem.name} pic={elem.pic}/>
	))
	return (
		<div>
			FRIENDSLIST
			<div className={cl.friends}>
				{friends}
			</div>
		</div>
	);
};

export default FriendsList;