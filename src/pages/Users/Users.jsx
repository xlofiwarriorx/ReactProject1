import React from 'react';
import UserItem from './UserItems/UserItem/UserItem';
import cl from './Users.module.css'
import axios from 'axios';

const Users = (props) => {
	let users =  props.users.map(elem=>{
		return(
		<div>
			<UserItem id={elem.id} pic={elem.photos.small != null ? elem.photos.small : 'https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg'}  name={elem.name} followed={elem.followed}/>
			<button onClick={()=>{
				if(elem.followed === false) {
					axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`, {}, {withCredentials: true, 
					headers: {
						'API-KEY': 'f1971d87-f66a-41f1-9437-39083ce6032b'
					}
				}).then(response => {
					if (response.data.resultCode == 0) {
						props.follow(elem.id)
					}
				})
				}
				else if(elem.followed === true) {

					axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${elem.id}`, {withCredentials: true,
						headers: {
							'API-KEY': 'f1971d87-f66a-41f1-9437-39083ce6032b'
						}
				}).then(response => {
						if (response.data.resultCode == 0) {
							props.follow(elem.id)
						}
					})

				}
			}}>
			{elem.followed ? 'unfollow': 'follow' }
			</button>
		</div>
		)
	});

	let pagesCount = Math.ceil (props.totalUsersCount/ props.pageSize)

	let pages = [];
	for (let i=1; i <= pagesCount; i++) {
		pages.push(i)
	}


	return (
		<div>
		{pages.map (p => {
			return <span onClick={() => {props.onPageChanged(p)}} className={ props.currentPage === p  && cl.selected }>{`${p} `}</span>
		})}
		{users}
	</div>
	);
};

export default Users;