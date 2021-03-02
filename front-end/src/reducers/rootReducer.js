const INITIAL_STATE = { users: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOAD_USERS": {
			state = { ...state, users: action.payload };
		}
		case "CREATE_USER": {
			state = { ...state, users: [...state.users, action.payload] };
		}
	}
};

export default rootReducer;
