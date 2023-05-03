import React from 'react';
import cl from './Post.module.css'
// import DefaultContent from '../../../DefaultContent/DefaultContent';

const Post = (props) => {
	return (
<div className={cl.item} >
	<div className={cl['pic-wrapper']}>
	<img src={props.src} className={`${cl.pic} ${cl.post}`}/>
	</div>
	<div className={cl['message-wrapper']}>
		<div className={cl.username}>
			{props.name}
		</div>
		<div className={cl.message}>
			{props.message}
		</div>
	</div>
	<div className={cl.like}> like </div>
	<div className={cl.count}>{props.likeCount}</div>
</div>
	);
};

export default Post;