import { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

const Contact = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const { name, email, message } = formState;
	const [emailSent, setEmailSent] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = event => {
		setFormState({
			...formState,
			[event.target.name]: event.target.value,
		});
	};

	const isEmailValid = email => {
		const emailRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegex.test(email);
	};

	const submit = async () => {
		if (!name || !email || !message) {
			alert("Please fill in all fields.");
			return;
		}

		if (!isEmailValid(email)) {
			alert("Please enter a valid email.");
			return;
		}

		const serviceId = process.env.EMAILJS_SERVICE_ID;
		const templateId = process.env.EMAILJS_TEMPLATE_ID;
		const userId = process.env.EMAILJS_USER_ID;

		const templateParams = {
			name,
			email,
			message,
		};

		try {
			setLoading(true);
			await emailjs.send(serviceId, templateId, templateParams, userId);
			setEmailSent(true);
			setFormState({ name: "", email: "", message: "" });
		} catch (error) {
			alert("Something went wrong, please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div id="contact-form">
			<input
				name="name"
				type="text"
				placeholder="Your Name"
				value={name}
				onChange={handleChange}
			/>
			<input
				name="email"
				type="email"
				placeholder="Your email address"
				value={email}
				onChange={handleChange}
			/>
			<textarea
				name="message"
				placeholder="Your message"
				value={message}
				onChange={handleChange}
			></textarea>
			<button
				onClick={submit}
				disabled={loading}
			>
				{loading ? "Sending..." : "Send Message"}
			</button>

			{emailSent && <span>Thank you for your message!!!</span>}
		</div>
	);
};

export default Contact;
