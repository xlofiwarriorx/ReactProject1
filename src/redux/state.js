let renderEntireTree = ()=>{}

export let store = {
	_state: {
		dialogs: 
		[
			{id:1, name:'imdima', message:'ghey dima', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
			{id:2, name:'vadik', message:'adaadsas   od vadik', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
			{id:3, name:'iluha', message:'rrrrrr iluha', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
			{id:4, name: 'dimass', message:'dimass sssaaas', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
			{id:5, name: 'kiryaaaa31', message: 'kirya 2ka4lllllinen', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'}
		],
		newMessage: 'hey',
	
		profile: {
			posts: [
				{id:1, name: 'Sveta Akimova', likes: 147, message: 'hphhello i am sveta how r u doing', src:"https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"},
				{id:2, name: 'E4lena Rudova', likes: 228, message: 'yo dude how it`s going', src:"https://static.fotor.com/app/minitools/aiimage/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"}
			],
			newPostText: 'hello'
		}
	},

	_renderEntireTree() {
		console.log('no subscribers')
	},

	getState() { 
			return this._state
		}
	,

	setSubscribe(observer) {
		this.renderEntireTree = observer
		},

	// setPost() {
	// 	let newPost = { id:3, name:'test test', likes: 0, message:this._state.profile.newPostText}
	// 	this._state.profile.posts.push(newPost)
	// 	this._state.profile.newPostText=''
	// 	this.renderEntireTree()
	// },

	// setNewPostText(text) {
	// 	this._state.profile.newPostText = text
	// 	this.renderEntireTree()
	// }, 

	// setMessage() {
	// 	this._state.dialogs[0].message = this._state.newMessage
	// 	this._state.newMessage = ''
	// 	this.renderEntireTree()
	// },

	// setUpdateChat(text) {
	// 	this._state.newMessage = text
	// 	this.renderEntireTree()
	// }, 
	dispatch(action) {
		if(action.type==='SET-MESSAGE') {
			this._state.dialogs[0].message = this._state.newMessage
			this._state.newMessage = ''
			this.renderEntireTree()
		}
		else if(action.type==='SET-UPDATE-CHAT') {
			this._state.newMessage = action.text
			this.renderEntireTree()
		}
		else if(action.type==='SET-POST') {
			let newPost = { id:3, name:'test test', likes: 0, message:this._state.profile.newPostText}
			this._state.profile.posts.push(newPost)
			this._state.profile.newPostText=''
			this.renderEntireTree()
		}
		else if(action.type==='SET-NEW-POST-TEXT') {
			this._state.profile.newPostText = action.text
			this.renderEntireTree()
		}
	}
}

// export const addPost = ()=>{
// 	let newPost = { id:3, name:'test test', likes: 0, message:state.profile.newPostText}
// 	state.profile.posts.push(newPost)
// 	state.profile.newPostText=''
// 	renderEntireTree(state)
// }

// export const updateNewPostText = (text) => {
// state.profile.newPostText = text
// renderEntireTree(state)
// }

// export const updateChat = (text) => {
// 	state.newMessage = text
// 	renderEntireTree(state)
// }
// export const addMessage = () =>{
// 	state.dialogs[0].message = state.newMessage
// 	state.newMessage = ''
// 	renderEntireTree(state)
// }

// let state = {
// 	dialogs: 
// 	[
// 		{id:1, name:'imdima', message:'ghey dima', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
// 		{id:2, name:'vadik', message:'adaadsasd vadik', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
// 		{id:3, name:'iluha', message:'rrrrrr iluha', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
// 		{id:4, name: 'dimass', message:'dimass sssaaas', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'},
// 		{id:5, name: 'kiryaaaa31', message: 'kirya 2ka4lllllinen', pic: 'https://imgeng.jagran.com/images/2022/jul/RanveerSinghPhotoshoot1658458840957.jpg'}
// 	],
// 	newMessage: 'hey',

// 	profile: {
// 		posts: [
// 			{id:1, name: 'Sveta Akimova', likes: 147, message: 'hphhello i am sveta how r u doing', src:"https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"},
// 			{id:2, name: 'E4lena Rudova', likes: 228, message: 'yo dude how it`s going', src:"https://static.fotor.com/app/minitools/aiimage/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"}
// 		],
// 		newPostText: 'hello'
// 	}
// }

// export const subscribe = (observer) => {
// renderEntireTree = observer
// }

// export default state;