import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Admin from "./Admin";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/signup">
				<SignUp />
			</Route>
			<Route exact path="/admin">
				<Admin />
			</Route>
		</Switch>
	);
};

export default Routes;
