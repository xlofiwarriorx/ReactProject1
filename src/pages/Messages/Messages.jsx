import React from 'react';
import cl from './Messages.module.css'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import MyDialogs from './MyDialogs/MyDialogs';
import PagesHeader from '../PagesComponents/PagesHeader/PagesHeader';
import Input from '../../components/Input/Input'
// import DefaultContent from '../../components/DefaultContent/DefaultContent';

const Messages = (props) => {

	// const ref = React.createRef()

	// const send = ()=>{
	// 	alert(ref.current.value)
	// }

	
	// addMessage={props.addMessage} 
	// updateChat={props.updateChat}
	const upd = (ref)=> {
		props.updateChat(ref.current.value)
	}
	const add = (ref)=> {
		props.addMessage()
	}

	return (
		<div className={cl.columns}>
			<PagesHeader title='DIALOGS'/>
			<MyDialogs  state={props.state} dialogsData={props.state.dialogsData} messagesData={props.state.messagesData}/>
			<Input value={props.newMessage} onClick={add} change={upd} buttonName={'send'}/>
		</div>

	);
};

export default Messages;