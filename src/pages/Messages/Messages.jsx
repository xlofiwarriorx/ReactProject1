import React from 'react';
import cl from './Messages.module.css'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import MyDialogs from './MyDialogs/MyDialogs';
import PagesHeader from '../PagesComponents/PagesHeader/PagesHeader';
import Input from '../../components/Input/Input'
import state, { setMessageCreator, setUpdateChat } from '../../redux/dialogs-reducer';
// import DefaultContent from '../../components/DefaultContent/DefaultContent';

const Messages = (props) => {

	const change = (ref)=> {
		const value = ref.current.value
		props.updateChat(value)
	}

	return (
		<div className={cl.columns}>
			<PagesHeader title='DIALOGS'/>
			<MyDialogs state={props.state}/>
			<Input value={props.newMessage} onClick={props.setMessage} change={change} buttonName={'send'}/>
		</div>
	)
};
export default Messages;