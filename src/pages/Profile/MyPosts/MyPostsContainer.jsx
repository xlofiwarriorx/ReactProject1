import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import Input from "../../../components/Input/Input";
import { setPostActionCreator, setNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
// import StoreContext from "../../../StoreContext";

// const MyPostsContainer = (props) => {

//   return ( 
// 	<StoreContext.Consumer> 
// 		{
// 		(store)=>
// 		{
// 			const setPost = ()=>{
// 				store.dispatch(setPostActionCreator())
// 			}
		
// 			let setNewPostText = (value)=>{
// 				store.dispatch(setNewPostTextActionCreator(value))
// 			}
		
// 			const state=store.getState()
// 			const posts = state.profile.posts
// 			const newPostText = state.profile.newPostText

// 			return (
// 			<MyPosts setNewPostText={setNewPostText} 
// 			setPost={setPost} 
// 			posts = {posts} 
// 			newPostText={newPostText} />
// 			)
// 	}
// 		}
// 		</StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state)=>{
	return{
	posts: state.profile.posts,
	newPostText: state.profile.newPostText
}}

let mapDispatchToProps= (dispatch)=>{
	return {
	setNewPostText: (value)=>{dispatch(setNewPostTextActionCreator(value))},
	setPost: ()=>{dispatch(setPostActionCreator())}
}}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
