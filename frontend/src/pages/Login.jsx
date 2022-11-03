import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { login, reset } from "../features/auth/authSlice";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	// Destructure the formData state values
	const { email, password } = formData;

	// This allows us to dispatch our actions
	const dispatch = useDispatch();
	// This allows us to programatically navigate using an action
	const navigate = useNavigate();

	// useSelector hook allows us to select from our global state
	const { user, isError, isLoading, isSuccess, message } =
		useSelector((state) => state.auth);

	// useEffect to reset the state after a login attempt
	useEffect(() => {
		// Handling an error in login
		if (isError) {
			toast.error(message);
		}
		// Handling a successful login (login and redirect)
		if (isSuccess || user) {
			navigate("/");
		}
		// Reset the userData state
		dispatch(reset());
	}, [
		isError,
		isSuccess,
		user,
		message,
		navigate,
		dispatch,
	]);

	// Function to handle form fields changing value (someone typing into them)
	const onChange = (event) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	// Function to handle form submission
	const onSubmit = (event) => {
		event.preventDefault();

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt /> Login
				</h1>
				<p>Please login to get support</p>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
							type='email'
							className='form-control'
							id='email'
							name='email'
							value={email}
							onChange={onChange}
							placeholder='Enter your email'
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							className='form-control'
							id='password'
							name='password'
							value={password}
							onChange={onChange}
							placeholder='Enter your password'
							required
						/>
					</div>
					<div className='form-group'>
						<button className='btn btn-block'>
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
