import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe, updateChat, addMessage, addPost, updateNewPostText } from './redux/state';


// addPost('hey')

const root = ReactDOM.createRoot(document.getElementById('root'));

 let renderEntireTree = (state)=>{
	root.render(
		<React.StrictMode>
		  <App state={state} updateChat={updateChat} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</React.StrictMode>
	 );
}

renderEntireTree(state)
subscribe(renderEntireTree)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
