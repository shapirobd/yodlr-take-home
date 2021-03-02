import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
	return (
		<div>
			<h1>List user data here</h1>
			<Link to="/signup">Registration Page</Link>
			<br />
			<Link to="/">Home Page</Link>
		</div>
	);
};

export default Admin;
