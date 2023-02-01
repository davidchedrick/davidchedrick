// import { Link } from "react-router-dom";
import "./social.css";
import linkedIn from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";

export default function Social() {
	return (
		<div className="social-container">
			<a
				href="https://www.linkedin.com/in/davidchedrick/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					alt="linkedIn"
					src={linkedIn}
				/>
			</a>
			<a
				href="https://www.github.com/davidchedrick"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					alt="github"
					src={github}
					className="github-logo"
				/>
			</a>
		</div>
	);
}
