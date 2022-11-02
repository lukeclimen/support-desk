import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
	register,
	reset,
} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	// Destructure the formData state values
	const { name, email, password, password2 } = formData;

	// This allows us to dispatch our actions
	const dispatch = useDispatch();
	// This allows us to navigate away from the page
	const navigate = useNavigate();

	// useSelector hook allows us to select from our global state
	const { user, isLoading, isError, isSuccess, message } =
		useSelector((state) => state.auth);

	// useEffect to reset the state after a registration attempt
	useEffect(() => {
		// Handling an error in registration
		if (isError) {
			toast.error(message);
		}
		// Handling a successful registration (login and redirect)
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

		// Verify that the passwords match
		if (password !== password2) {
			toast.error("Passwords do not match");
		} else {
			const userData = {
				name,
				email,
				password,
			};
			dispatch(register(userData));
		}
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account</p>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
							type='text'
							className='form-control'
							id='name'
							name='name'
							value={name}
							onChange={onChange}
							placeholder='Enter your name'
							required
						/>
					</div>
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
						<input
							type='password'
							className='form-control'
							id='password2'
							name='password2'
							value={password2}
							onChange={onChange}
							placeholder='Confirm your password'
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

export default Register;
