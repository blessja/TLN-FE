"use client";
import React, { useState } from "react";
import Image from "next/image";
import formImage from "../../../../../public/collboratewithUs/collaborate_formimg.svg";
import {useCreateCollaborationMutation} from "../../../../store/apiSlice"

const Formcbus = () => {
	const [formState, setFormState] = useState({
		name: "",
		phone: "",
		email: "",
		organisation: "",
		collaborationType: "",
		collaborationGoal: "",
		specificRequirements: "",
		learnedAboutUs: "",
        otherCollaboration: "",
        otherLearnedAboutUs: "",
	});
	const [errors, setErrors] = useState({});
	const [createCollaboration, { isLoading}] = useCreateCollaborationMutation();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async(e) => {
		e.preventDefault();
		const newErrors = {};
		if (!validateEmail(formState.email)) newErrors.email = "Invalid email address";
		if (!formState.name.trim()) newErrors.name = "Name is required";
		if (!validatePhone(formState.phone)) newErrors.phone = "Invalid phone number";

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			setTimeout(() => setErrors({}), 4000);
		} else {
			setErrors({});
			try {

				await createCollaboration(formState).unwrap();
				console.log("Form submitted successfully:", formState);
		
				setFormState({
					name: "",
					phone: "",
					email: "",
					organisation: "",
					collaborationType: "",
					collaborationGoal: "",
					specificRequirements: "",
					learnedAboutUs: "",
					otherCollaboration: "",
					otherLearnedAboutUs: "",
				});
			  } catch (error) {
				console.error("Error submitting form:", error);
			  }
			console.log("Form submitted:", formState);
			
		}
	};

	const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
	const validatePhone = (phone) => /^[0-9\b]+$/.test(String(phone));

	return (
		<>
			<div className="min-w-screen min-h-screen flex items-center justify-center px-4 sm:px-10 lg:px-20 py-5">
				<div className="w-full max-w-5xl">
					<p className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 pt-2">
						Collaborate with us
					</p>
					<div className="text-gray-500 md:flex pt-6">
						<div className="w-full md:w-1/2 py-5 px-4 flex justify-center items-center">
							<Image src={formImage} className="w-full h-auto" alt="Form Image" />
						</div>

						<div className="w-full md:w-1/2 py-4 px-4 sm:px-8 lg:px-10">
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Contact Information Section */}
								<p className="text-xl font-semibold mb-2">Contact Information</p>
								<div className="space-y-4">
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<div>
											<input
												type="text"
												name="name"
												value={formState.name}
												onChange={handleChange}
												className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
												placeholder="Full Name"
											/>
											{errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
										</div>
										<div>
											<input
												type="text"
												name="phone"
												value={formState.phone}
												onChange={handleChange}
												className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
												placeholder="Contact No."
											/>
											{errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
										</div>
									</div>
									<div>
										<input
											type="email"
											name="email"
											value={formState.email}
											onChange={handleChange}
											className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Email Address"
										/>
										{errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
									</div>
									<div>
										<input
											type="text"
											name="organisation"
											value={formState.organisation}
											onChange={handleChange}
											className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Name of the Organisation"
										/>
									</div>
								</div>

								{/* Collaboration Detail Section */}
								<p className="text-xl font-semibold mb-2">Collaboration Detail</p>
								<div className="space-y-4">
									<div>
										<select
											name="collaborationType"
											value={formState.collaborationType}
											onChange={handleChange}
											className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
										>
											<option value="">Type of Collaboration</option>
											<option value="Webinar">Webinar</option>
											<option value="Workshop">Workshop</option>
											<option value="Event">Event</option>
                                            <option value="LinkedIn">LinkedIn</option>
                                            <option value="Summer Camp">Summer Camp</option>
                                            <option value="MasterClass">MasterClass</option>
                                            <option value="Sponsership">Sponsership</option>
                                            <option value="Other">Other(Please Specify)</option>
										</select>
									</div>
                                    {formState.collaborationType === "Other" && (
                                        <div>
                                            <input
                                                type="text"
                                                name="otherCollaboration"
                                                value={formState.otherCollaboration}
                                                onChange={handleChange}
                                                className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
                                                placeholder="Please specify your collaboration type"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <textarea
                                            name="collaborationGoal"
                                            value={formState.collaborationGoal}
                                            onChange={handleChange}
                                            className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
                                            placeholder="Goal of the Collaboration"
                                        ></textarea>
                                    </div>
                                </div>
								{/* Additional Information Section */}
								<p className="text-xl font-semibold mb-2">Additional Information</p>
								<div className="space-y-4">
									<div>
										<textarea
											name="specificRequirements"
											value={formState.specificRequirements}
											onChange={handleChange}
											className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Any Specific Requirements or Preferences"
										></textarea>
									</div>
									<div>
										<select
											name="learnedAboutUs"
											value={formState.learnedAboutUs}
											onChange={handleChange}
											className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
										>
											<option value="">How did you learn about us?</option>
											<option value="Social Media">Instagram</option>
											<option value="Newspaper">Facebook</option>
											<option value="LinkedIn">LinkedIn</option>
											<option value="Referral">Referral</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Pinterest">Pinterest</option>
                                            <option value="Other">Other(Please Specify)</option>
										</select>
									</div>
                                    {formState.learnedAboutUs === "Other" && (
									<div>
										<input
											type="text"
											name="otherLearnedAboutUs"
											value={formState.otherLearnedAboutUs}
											onChange={handleChange}
											className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 outline-none focus:border-indigo-500"
											placeholder="Please specify how you learned about us"
										/>
									</div>
								)}
								</div>

								<div className="mt-6">
									<button
										type="submit"
										className="text-xl bg-primary-color border hover:bg-transparent hover:border-primary-color hover:text-primary-color text-white rounded-lg pl-8 pr-8 font-semibold p-3"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Formcbus;
