import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Yodlr Design Challenge</h1>
			<p>
				<Link to="/signup">Registration Page</Link>
				<br />
				<Link to="/admin">Admin Page</Link>
			</p>
		</div>
	);
};

export default Home;
