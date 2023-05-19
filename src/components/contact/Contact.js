import { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [emailSent, setEmailSent] = useState(false);
	const [loading, setLoading] = useState(false);

	const isEmailValid = email => {
		return email.includes("@");
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
			setName("");
			setEmail("");
			setMessage("");
		} catch (error) {
			alert("Something went wrong, please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div id="contact-form">
			<input
				type="text"
				placeholder="Your Name"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Your email address"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<textarea
				placeholder="Your message"
				value={message}
				onChange={e => setMessage(e.target.value)}
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
