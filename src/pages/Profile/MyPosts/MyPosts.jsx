import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import Input from "../../../components/Input/Input";










const MyPosts = (props) => {
	const getref = (ref)=>{
		let text = ref.current.value
		props.addPost()
	}

	let change = (ref)=>{
		console.log(ref.current.value)
		props.updateNewPostText(ref.current.value)
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
		<Input buttonName = 'add post'change={change} value={props.newPostText} updateNewPostText={props.updateNewPostText} getref={getref} onClick={getref}/> 
		{dialogsElements}
    </div>
  );
};

export default MyPosts;
