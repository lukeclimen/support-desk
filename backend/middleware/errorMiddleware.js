const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode
		? res.statusCode
		: 500;

	// Verify that the status code is at least 400 (less than 400 indicates a non-error code)
	if (statusCode < 400) {
		statusCode = 400;
	} else {
		res.statusCode = statusCode;
	}
	res.json({
		message: err.message,
		stack:
			process.env.NODE_ENV === "production"
				? null
				: err.stack,
	});
};

module.exports = { errorHandler };
