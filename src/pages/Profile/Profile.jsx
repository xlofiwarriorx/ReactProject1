import React from "react";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
// import DefaultContent from '../../components/DefaultContent/DefaultContent';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={cl.profilecontent}>
      <ProfileInfo />
      <MyPosts store={props.store} className={cl.posts}/>
      {/* <MyPosts newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} className={cl.posts} addPost={props.addPost} posts={props.state.posts}/> */}
    </div>
  );
};

export default Profile;
