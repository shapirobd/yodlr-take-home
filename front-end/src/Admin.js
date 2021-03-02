import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { loadUsers } from "./actionCreators/userActionCreators";
import UserCard from "./UserCard";

const Admin = () => {
	const dispatch = useDispatch();

	const users = useSelector((state) => state.users, shallowEqual);
	console.log(users);

	useEffect(() => {
		if (!users.length) {
			console.log("LOAD USERS");
			dispatch(loadUsers());
			console.log(users);
		}
	}, []);

	return (
		<div>
			<h1>List user data here</h1>
			{users.map((user) => (
				<UserCard
					firstName={user.firstName}
					lastName={user.lastName}
					email={user.email}
					state={user.state}
					key={user.id}
				/>
			))}
			<Link to="/signup">Registration Page</Link>
			<br />
			<Link to="/">Home Page</Link>
		</div>
	);
};

export default Admin;
