import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import cl from './FriendsList.module.css'
import FriendsList from './FriendsList';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const FriendsListContainer = (props) => {
// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store)=>{
// 					const state = store.getState().dialogs.users
// 					return <FriendsList state={state}/>
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		state: state.dialogs.users
	}
}

const FriendsListContainer = connect(mapStateToProps)(FriendsList)

export default FriendsListContainer;