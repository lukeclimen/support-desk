const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const {
	errorHandler,
} = require("./middleware/errorMiddleware");

const app = express();

// Middleware code
// This allows us to accept raw JSON
app.use(express.json());
// This allows us to accept URL-encoded form
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.status(200).json({ message: "Hello" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () =>
	console.log(`Server started on port ${PORT}`)
);
