import catsGaloreImg from "../images/CutieCatAnimation.gif";

import ProjectCard from "../components/project/ProjectCard";

function CatsGalore() {
	const img = catsGaloreImg;
	const text =
		"Cats Galore is a JavaScript game. Built from scratch using vanilla JavaScript and HTML hosted on Netlify. ";
	const link = "https://catsgalore.netlify.app/";
	const title = "Cats Galore";
	const list = (
		<div>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
			</ul>
			<ul className="git-links">
				<li>
					<a href="https://github.com/davidchedrick/phase_1_project">
						GitHub
					</a>
				</li>
			</ul>
		</div>
	);

	return (
		<ProjectCard
			img={img}
			title={title}
			text={text}
			list={list}
			link={link}
		/>
	);
}

export default CatsGalore;
