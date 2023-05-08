const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
	userItems: [
		{id:1, followed: true, name:'imdima', status:'ghey dima', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:2, followed: true, name:'vadik', status:'adaadsas   od vadik', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:3, followed: false, name:'iluha', status:'rrrrrr iluha', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:4, followed: true, name: 'dimass', status:'dimass sssaaas', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		{id:5, followed: false, name: 'kiryaaaa31', status: 'kirya 2ka4lllllinen', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'}
	]
}

export const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		// case UNFOLLOW: 
		// return{
		// 	...state, 
		// 	users: state.users.map(elem=>{
		// 		if(elem.followed === true && action.id === elem.id) {
		// 			return {
		// 				...elem,
		// 				followed: false
		// 			}
		// 		}
		// 	})
		// }
		case FOLLOW:
		return{
			...state, 
			users: state.userItems.map(elem=>{
				if(elem.followed === false && action.id === elem.id) {
					console.log('und' + elem.id)
					return {
						...elem,
						followed: true
					}
				}
				else if (elem.followed === true && action.id === elem.id){
					console.log('fwd' + elem.id)
					return {
						...elem,
						followed: false
					}
				}
				return elem
			})
		}
		default: return state
	}
}

export const unfollowActionCreator = ()=>{
	return {type: 	UNFOLLOW}
}
export const followActionCreator = (id)=>{
	return {type: 	FOLLOW, id: id}
}