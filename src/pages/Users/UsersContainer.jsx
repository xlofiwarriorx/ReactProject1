import React from "react";
import { connect } from "react-redux";
// import UsersAPIComponent from "./UsersAPIComponent";
import {
  follow,
  setCurrentPage,
  setUsers,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Spinner from './../../img/Spinner.svg'
import Loader from '../../components/common/Loader/Loader'
import { getUsers } from "../../api/Api";

class UsersContainer extends React.Component {
	constructor(props) {
		super(props)
	}
; 
componentDidMount() {
	this.props.toggleIsFetching(true)
	getUsers(this.props.currentPage, this.props.pageSize).then(data => {
	this.props.toggleIsFetching(false)
	this.props.setUsers(data.items)
		console.log(this.props.users)
		this.props.setTotalUsersCount(data.totalCount)
	})
}
onPageChanged = (p) => {
	this.props.setCurrentPage(p)
	this.props.toggleIsFetching(true)
	getUsers(p, this.props.pageSize).then(data => {
	this.props.toggleIsFetching(false)
	this.props.setUsers(data.items)
	})
	
}


	render() {
		return <> 
		{this.props.isFetching ? <Loader/> : null}
			<Users currentPage = {this.props.currentPage} pageSize = {this.props.pageSize} totalUsersCount = {this.props.totalUsersCount} users={this.props.users} follow={this.props.follow} onPageChanged={this.onPageChanged} />
		</> 
	}

};

let mapStateToProps = (state) => {
  return {
    users: state.users.userItems,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
	 isFetching: state.users.isFetching
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (id) => {
//       dispatch(followActionCreator(id));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (p) => {
//       dispatch(setCurrentPageCreator(p));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
// 	 toggleIsFetching: (isFetching) => {
// 		dispatch(toggleIsFetchingAC(isFetching))
// 	 }
//   };
// };



export default connect(
	mapStateToProps,
	{
		follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
	}
 )(UsersContainer);
