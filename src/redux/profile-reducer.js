const SET_POST = 'SET-POST'
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT'

export const profileReducer = (state, action) => {
	if(action.type==='SET-POST') {
		let newPost = { id:3, name:'test test', likes: 0, message:state.profile.newPostText}
		state.profile.posts.push(newPost)
		state.profile.newPostText=''
	}
	else if(action.type==='SET-NEW-POST-TEXT') {
		state.profile.newPostText = action.text
	}
	
	
	return state
}