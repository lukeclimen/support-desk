// Using the controller function to handle the logic for the user routes in one place

const asyncHandler = require("express-async-handler");

// @desc   Register a new user
// @route  /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	// Validation
	if (!name || !password || !email) {
		res.status(400);
		throw new Error(
			"Missing required login credentials"
		);
	}

	res.send("Register Route");
});

// @desc   Login a new user
// @route  /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
	res.send("Login Route");
});

module.exports = {
	registerUser,
	loginUser,
};
