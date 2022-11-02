import {
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";

// Default state for Authentication
const initialState = {
	user: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Function to use asyncronous data for registering
export const register = createAsyncThunk(
	"auth/register",
	async (user, thunkAPI) => {
		console.log(user);
	}
);

// Function to use asyncronous data for logging in
export const login = createAsyncThunk(
	"auth/login",
	async (user, thunkAPI) => {
		console.log(user);
	}
);

export const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isLoading = false;
			state.message = "";
		},
	},
	extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
