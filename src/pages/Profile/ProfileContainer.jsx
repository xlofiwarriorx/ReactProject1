import React, { useEffect } from "react";
import cl from "./Profile.module.css";
// import MyPostsContainer from "./MyPosts/MyPosts";
// import DefaultContent from '../../components/DefaultContent/DefaultContent';
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import {useParams} from 'react-router-dom'

export function withRouter(Children){
	return(props)=>{
		const { userId } = useParams();
		const match = {
		  params: {
			 userId: userId
		  }
		}
		return <Children {...props}  match = {match}/>
	}
}

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId=2
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setUserProfile(response.data)
})
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		 );
	}
};

let mapStateToProps = (state) => ({
profile: state.profile.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);