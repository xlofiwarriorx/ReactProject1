import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator } from '../../redux/users-reducer';


let mapStateToProps = (state)=>{
	return{
		users: state.users.userItems
}}

let mapDispatchToProps= (dispatch)=>{
	return {
	follow: (id)=>{dispatch(followActionCreator(id))},
	unfollow: ()=>{dispatch(unfollowActionCreator())}
}}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;