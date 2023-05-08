import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import Input from "../../../components/Input/Input";
import { setPostActionCreator, setNewPostTextActionCreator } from "../../../redux/profile-reducer";








const MyPosts = (props) => {
	let change = (ref)=>{
		let value = ref.current.value
		props.setNewPostText(value)
	}

	let dialogsElements = props.posts.map(post=>{
		return (
			<Post
			  likeCount={post.likes}
			  name={post.name}
			  message={post.message}
			  src={post.src}
			/>
		)
	})

  return (
    <div className={cl.posts}>
		<Input buttonName = 'add post'change={change} value={props.newPostText}  onClick={props.setPost}/> 
		{dialogsElements}
    </div>
  );
};

export default MyPosts;
