import React from 'react';
import cl from './Messages.module.css'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import MyDialogs from './MyDialogs/MyDialogs';
import PagesHeader from '../PagesComponents/PagesHeader/PagesHeader';
import Input from '../../components/Input/Input'
import state, { setMessageCreator, setUpdateChat } from '../../redux/dialogs-reducer';
import Messages from './Messages'
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
// import DefaultContent from '../../components/DefaultContent/DefaultContent';

// const MessagesContainer = (props) => {

// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store)=>{
// 					const updateChat = (value)=> {
// 						store.dispatch(setUpdateChat(value))
// 					}
// 					const setMessage = ()=> {
// 						store.dispatch(setMessageCreator())
// 					}
// 					const state=store.getState()
// 					const newMessage=state.dialogs.newMessage

// 					return(
// 						<Messages 
// 						updateChat={updateChat} 
// 						setMessage={setMessage} 
// 						state={state} 
// 						newMessage={newMessage}/>
// 					)
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	)
// };

let mapStateToProps = (state)=>{
	return {
		state: state,
		newMessage: state.dialogs.newMessage
	}
}

let mapDispatchToProps = (dispatch)=>{
	return {
		updateChat: (value)=> {dispatch(setUpdateChat(value))},
		setMessage: ()=> {dispatch(setMessageCreator())}
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;