const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
	userItems: [
		// {id:1, followed: true, name:'imdima', status:'ghey dima', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		// {id:2, followed: true, name:'vadik', status:'adaadsas   od vadik', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		// {id:3, followed: false, name:'iluha', status:'rrrrrr iluha', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		// {id:4, followed: true, name: 'dimass', status:'dimass sssaaas', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
		// {id:5, followed: false, name: 'kiryaaaa31', status: 'kirya 2ka4lllllinen', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'}
	],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1, 
	isFetching: false
}

export const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOW:
		return{
			...state, 
			userItems: state.userItems.map(elem=>{
				if(action.id === elem.id) {
					return {
						...elem,
						followed: !elem.followed, 
					}
				}
				return elem
			})
		}
		case SET_USERS: {
			return {...state, userItems: action.users}
		}
		case SET_CURRENT_PAGE: return {
			...state, currentPage: action.p
		}
		case SET_TOTAL_USERS_COUNT: return {
			...state, totalUsersCount: action.count
		}
		case TOGGLE_IS_FETCHING: return {
			...state, isFetching: action.isFetching
		}
		default: return state
	}
}

export const follow = (id)=>{
	return {type: 	FOLLOW, id: id}
}
export const setUsers = (users) => ({type: SET_USERS, users: users})

export const setCurrentPage = (p) => {
	return {type: SET_CURRENT_PAGE, p:p}
}

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export const toggleIsFetching = (isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching})