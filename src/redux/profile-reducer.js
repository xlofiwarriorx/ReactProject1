const SET_POST = 'SET-POST'
const SET_NEW_POST_TEXT = 'SET-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
			posts: [
				{id:1, name: 'Sveta Akimova', likes: 147, message: 'hphhello i am sveta how r u doing', src:"https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"},
				{id:2, name: 'E4lena Rudova', likes: 228, message: 'yo dude how it`s going', src:"https://static.fotor.com/app/minitools/aiimage/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"}
			],
			newPostText: 'hello',
			profile: null
}

export const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_POST:
			const newPost = { id:3, name:'test test', likes: 0, message:state.newPostText}
		return {
			...state,
			posts: state.posts.concat(newPost),
			newPostText: ''
		}
		case SET_NEW_POST_TEXT: 
		return {
			...state, 
			newPostText: action.text
		}
		case SET_USER_PROFILE: 
		return {
			...state, profile: action.profile
		}
		default: return state
	}
}

export const setPostActionCreator = ()=>{
	return {type: SET_POST}
}
export const setNewPostTextActionCreator = (text)=>{
	return {type:SET_NEW_POST_TEXT, text: text}
}
export const setUserProfile = (profile)=>{
	return {type:SET_USER_PROFILE, profile}
}