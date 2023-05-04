const SET_MESSAGE = 'SET-MESSAGE'
const SET_UPDATE_CHAT = 'SET-UPDATE-CHAT'

export const dialogsReducer = (state, action) => {

	if(action.type==='SET-MESSAGE') {
		state.dialogs[0].message = state.newMessage
		state.newMessage = ''
	}
	else if(action.type==='SET-UPDATE-CHAT') {
		state.newMessage = action.text
	}
	return state
}