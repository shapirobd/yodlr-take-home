const INITIAL_STATE = { users: [] };

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOAD_USERS": {
			return { ...state, users: action.payload };
		}
		case "CREATE_USER": {
			return { ...state, users: [...state.users, action.payload] };
		}
		default: {
			return state;
		}
	}
};

export default rootReducer;
