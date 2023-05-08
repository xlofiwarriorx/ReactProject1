import React from 'react';
import UserItem from './UserItems/UserItem/UserItem';

const Users = (props) => {

	const users = props.users.map(elem=>{

		
	const isFollowed = ()=>{				
		if (elem.followed === true){
			return 'UNFOLLOW'
		}
		else {
			return 'FOLLOW'
		}}

		return (<div>
<UserItem pic={elem.pic}  name={elem.name} followed={elem.followed}/>
<button onClick={()=>{
	props.follow(elem.id)
	console.log(elem.followed)
}}>
{isFollowed()
}
</button>
		</div>
		)
	})
	return (
		users
	);
};

export default Users;