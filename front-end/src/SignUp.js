import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "./actionCreators/userActionCreators";

const SignUp = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const INITIAL_FORM_DATA = {
		email: "",
		firstName: "",
		lastName: "",
		state: "",
	};
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createUser(formData));
		setFormData(INITIAL_FORM_DATA);
		history.push("/admin");
	};

	return (
		<div className="SignUp">
			<h1>Yodlr Registration Portal</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					onChange={handleChange}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					onChange={handleChange}
				/>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" onChange={handleChange} />
				<button type="submit">Submit</button>
			</form>
			<p>
				<Link to="/admin">Admin Page</Link>
				<br />
				<Link to="/">Home Page</Link>
			</p>
		</div>
	);
};

export default SignUp;
