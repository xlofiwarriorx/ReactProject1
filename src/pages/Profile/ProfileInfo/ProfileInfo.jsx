import React from "react";
import cl from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
		<div>
      	<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
		</div>
		<div className={cl.description}>
    	  description here
		</div>
    </div>
  );
};

export default ProfileInfo;
