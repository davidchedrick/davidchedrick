import "./social.css";
import linkedIn from "./images/linkedin-logo.png";
import github from "./images/github-logo.png";

const socialLinks = [
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/davidchedrick/",
		image: linkedIn,
		alt: "linkedIn",
	},
	{
		name: "Github",
		url: "https://www.github.com/davidchedrick",
		image: github,
		alt: "github",
	},
];

export default function Social() {
	return (
		<div className="social-container">
			{socialLinks.map(({ name, url, image, alt }) => (
				<a
					key={name}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						alt={alt}
						src={image}
						className={`${alt}-logo icon`}
					/>
				</a>
			))}
		</div>
	);
}
