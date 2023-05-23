import React from "react";
import cl from './ProfileInfo.module.css'
import Loader from "../../../components/common/Loader/Loader";

const ProfileInfo = (props) => {
	// debugger
	if(!props.profile) {
		return <Loader/>
	}

  return (
    <div>
		<div>
      	<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
		</div>
		<div className={cl.description}>
			<img src={props.profile.photos.large}/>
			<div>{props.profile.fullName + props.profile.aboutMe}</div>
    	  description here
		</div>
    </div>
  );
};

export default ProfileInfo;
