import React from "react";
import cl from "./DialogUsersItem.module.css";
import { NavLink } from "react-router-dom";

const DialogUsersItem = (props) => {
  return (
    <div className={cl["users-item-wrapper"]}>
      <div>
			<img src={props.pic} alt="profile pic" className={cl.pic}/>
		</div>
		<NavLink
        to={`/messages/${props.id}`}
        className={`${cl["users-item"]} ${({ isActive }) =>
          isActive ? `${cl.active}` : ""}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogUsersItem;
