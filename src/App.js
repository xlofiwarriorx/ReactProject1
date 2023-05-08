import React, { useRef } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import News from './pages/News/News'
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings";
import MessagesContainer from "./pages/Messages/MessagesContainer";
import UsersContainer from "./pages/Users/UsersContainer";
import UserItems from "./pages/Users/UserItems/UserItems";
// import DefaultContent from "./components/DefaultContent/DefaultContent";

function App(props) {
  return (
    <BrowserRouter>
	 <div className="app-wrapper">
	 	<Header/>
		<Navbar/>
		<Routes>
        <Route path="/messages" element={<MessagesContainer  className={'app-wrapper'}/>}></Route>
        <Route path="/profile" element={<Profile  className={'app-wrapper'}/>}></Route>
        <Route path="/news" element={<News className={'app-wrapper'}/>}></Route>
        <Route path="/music" element={<Music className={'app-wrapper'}/>}></Route>
        <Route path="/settings" element={<Settings className={'app-wrapper'}/>}></Route>
        <Route path="/users" element={<UserItems className={'app-wrapper'}/>}></Route>
      </Routes>
	 </div>
    </BrowserRouter>
  );
}


export default App;
