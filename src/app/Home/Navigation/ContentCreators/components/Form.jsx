"use client";
import React, { useState } from "react";
import Image from "next/image";
import formImage from "../../../../../Assets/ContentCreators/form.png";
import {InterFont} from "../../../../../Utilities/Font"

const Form = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		instagramUsername: "",
	});
	const [errors, setErrors] = useState({});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	console.log(formState);

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePhone = (phone) => {
		const re = /^[0-9\b]+$/; // Only digits allowed
		return re.test(String(phone));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};

		if (!validateEmail(formState.email)) {
			newErrors.email = "Invalid email address";
		}

		if (!formState.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formState.instagramUsername.trim()) {
			newErrors.instagramUsername = "Username is required";
		}

		if (!validatePhone(formState.phone)) {
			newErrors.phone = "Invalid phone number";
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			setTimeout(() => {
				setErrors({});
			}, 4000);
		} else {
			setErrors({});
			console.log("Form submitted:", formState);

			// You can add form submission logic here
		}
	};

	return (
		<>
			<div className="min-w-screen min-h-screen Inter.className flex items-center justify-center px-1 sm:px-20 py-5">
				<div className="  w-full overflow-hidden">
					<p className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl  text-center font-bold">
						Start Your Journey
					</p>
					<div className="text-gray-500 md:flex w-full">
						<div className="w-full sm:w-1/2 py-5 sm:py-10 px-4 sm:px-10  ">
							<div className="flex items-center justify-center h-full">
								<Image
									src={formImage}
									className="w-full"
									alt="Form Image"
								/>
							</div>
						</div>

						<div className="w-full md:w-1/2 py-4 sm:py-10 px-1 text-base my-auto md:px-2">
							<div className="flex flex-col text-xl gap-3 font-normal">
								<p className="py-4 px-3 text-black">
									Fill out the form below to become part of our vibrant
									community.
								</p>
								<form onSubmit={handleSubmit}>
									<div className="flex flex-col sm:flex-row">
										<div className="sm:w-1/2 w-full  px-3 mb-5">
											<input
												type="text"
												id="name"
												name="name"
												value={formState.name}
												onChange={handleChange}
												className="w-full   pl-3 pr-3 py-1.5 rounded-lg border-2 border-gray-400   bg-gray-50 outline-none focus:border-indigo-500"
												placeholder="Full Name "
											/>
											{errors.name && (
												<p className="text-red-500 text-xs italic">
													{errors.name}
												</p>
											)}
										</div>
										<div className="sm:w-1/2 w-full px-3 mb-5">
											<input
												type="number"
												id="phone"
												name="phone"
												value={formState.phone}
												onChange={handleChange}
												className="w-full  pl-3 pr-3 py-1.5 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
												placeholder="Contact No."
											/>
											{errors.phone && (
												<p className="text-red-500 text-xs italic">
													{errors.phone}
												</p>
											)}
										</div>
									</div>

									<div className="w-full px-3 mb-5">
										<input
											type="email"
											id="email"
											name="email"
											value={formState.email}
											onChange={handleChange}
											className="w-full  pl-3 pr-3 py-1.5 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Email Address "
										/>
										{errors.email && (
											<p className="text-red-500 text-xs italic">
												{errors.email}
											</p>
										)}
									</div>

									<div className="w-full px-3 mb-12">
										<input
											type="text"
											id="instagramUsername"
											name="instagramUsername"
											value={formState.instagramUsername}
											onChange={handleChange}
											className="w-full  pl-3 pr-3 py-1.5 rounded-lg border-2 border-gray-400  bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Instagram Username"
										/>
										{errors.instagramUsername && (
											<p className="text-red-500 text-xs italic">
												{errors.instagramUsername}
											</p>
										)}
									</div>

									<div className=" px-3 mb-5">
										<button
											type="submit"
											className="block w-full max-w-xs text-xl bg-primary-color border hover:bg-transparent hover:border-primary-color hover:text-primary-color   text-white rounded-lg px-3 py-3 font-semibold"
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
