import React from "react";

const UserCard = (user) => {
	console.log(user.firstName);
	return (
		<div className="UserCard">
			<h2>
				{user.firstName} {user.lastName}
			</h2>
			<p>{user.email}</p>
			<small>{user.state}</small>
		</div>
	);
};

export default UserCard;
