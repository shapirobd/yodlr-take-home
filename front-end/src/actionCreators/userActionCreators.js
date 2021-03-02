import axios from "axios";
import { CREATE_USER, LOAD_USERS } from "../actionTypes";

const API_URL = "http://localhost:3000";

export const createUser = (userInfo) => {
	return async (dispatch) => {
		try {
			const user = await axios.post(`${API_URL}/users`, userInfo);
			dispatch(createdUser(user));
		} catch (e) {
			console.log(e);
		}
	};
};

const createdUser = (user) => {
	return {
		type: CREATE_USER,
		payload: user,
	};
};

export const loadUsers = () => {
	return async (dispatch) => {
		try {
			const users = await axios.get(`${API_URL}/users`);
			dispatch(loadedUsers(users));
		} catch (e) {
			console.log(e);
		}
	};
};

const loadedUsers = (users) => {
	return {
		type: LOAD_USERS,
		payload: users,
	};
};
