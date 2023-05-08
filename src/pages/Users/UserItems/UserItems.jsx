import React from 'react';
import UserItem from './UserItem/UserItem';
import Users from '../Users';
import PagesHeader from '../../PagesComponents/PagesHeader/PagesHeader';
import UsersContainer from '../UsersContainer';
import cl from './UserItems.module.css'


const UserItems = (props) => {
return(
<div >
	<PagesHeader  title='USERS'/>
	<UsersContainer />
</div>
)
};

export default UserItems;