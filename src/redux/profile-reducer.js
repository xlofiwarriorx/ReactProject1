const SET_POST = 'SET-POST'
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT'

let initialState = {
			posts: [
				{id:1, name: 'Sveta Akimova', likes: 147, message: 'hphhello i am sveta how r u doing', src:"https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"},
				{id:2, name: 'E4lena Rudova', likes: 228, message: 'yo dude how it`s going', src:"https://static.fotor.com/app/minitools/aiimage/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"}
			],
			newPostText: 'hello'
}

export const profileReducer = (state = initialState, action) => {
	if(action.type==='SET-POST') {
		let newPost = { id:3, name:'test test', likes: 0, message:state.newPostText}
		state.posts.push(newPost)
		state.newPostText=''
	}
	else if(action.type==='SET-NEW-POST-TEXT') {
		state.newPostText = action.text
	}
	return state
}

export const setPostActionCreator = ()=>{
	return {type: SET_POST}
}
export const setNewPostTextActionCreator = (text)=>{
	return {type:SET_NEW_POST_TEXT, text: text}
}