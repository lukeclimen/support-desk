import axios from "axios";

// This is specifically the endpoint for the authentication stuff we want
const API_URL = "/api/users";

// Register user
const register = async (userData) => {
	console.log(userData);
	const response = await axios.post(API_URL, userData);

	if (response.data) {
		localStorage.setItem(
			"user",
			JSON.stringify(response.data)
		);
	}

	return response.data;
};

const authService = {
	register,
};

export default authService;
