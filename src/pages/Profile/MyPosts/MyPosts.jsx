import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import Input from "../../../components/Input/Input";










const MyPosts = (props) => {


	const getref = (ref)=>{
		let text = ref.current.value
		// props.store.setPost()
		props.store.dispatch({type: 'SET-POST'})
	}

	let change = (ref)=>{
		// props.store.setNewPostText.bind(props.store)(ref.current.value)
		props.store.dispatch({type:'SET-NEW-POST-TEXT', text: ref.current.value})
	}

	const state=props.store.getState()

	let dialogsElements = state.profile.posts.map(post=>{
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
		<Input buttonName = 'add post'change={change} value={state.profile.newPostText}  onClick={getref}/> 
		{dialogsElements}
    </div>
  );
};

export default MyPosts;
