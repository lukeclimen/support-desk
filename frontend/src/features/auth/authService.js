import axios from "axios";

// This is specifically the endpoint for the authentication stuff we want
const API_URL = "/api/users";

// Register user
const register = async (userData) => {
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem(
			"user",
			JSON.stringify(response.data)
		);
	}

	return response.data;
};

// Login existing user
const login = async (userData) => {
	const response = await axios.post(
		API_URL + "/login",
		userData
	);

	if (response.data) {
		localStorage.setItem(
			"user",
			JSON.stringify(response.data)
		);
	}

	return response.data;
};

// Logout user
const logout = () => localStorage.removeItem("user");

const authService = {
	register,
	logout,
	login,
};

export default authService;
