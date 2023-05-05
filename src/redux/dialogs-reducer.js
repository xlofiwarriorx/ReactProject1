const SET_MESSAGE = 'SET-MESSAGE'
const SET_UPDATE_CHAT = 'SET-UPDATE-CHAT'

let initialState = {
		users: 	[
		{id:1, name:'imdima', message:'ghey dima', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:2, name:'vadik', message:'adaadsas   od vadik', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:3, name:'iluha', message:'rrrrrr iluha', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:4, name: 'dimass', message:'dimass sssaaas', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:5, name: 'kiryaaaa31', message: 'kirya 2ka4lllllinen', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'}
		], 
		newMessage: 'hey'
}

export const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
	case SET_MESSAGE :
		state.users[0].message = state.newMessage
		state.newMessage = ''
		return state
	case SET_UPDATE_CHAT:
		state.newMessage = action.text
		return state
	default: return state
}
}

export const setMessageCreator = ()=>{
	return {type: 	SET_MESSAGE}
}
export const setUpdateChat = (text)=>{
	return {type: 	SET_UPDATE_CHAT, text: text}
}