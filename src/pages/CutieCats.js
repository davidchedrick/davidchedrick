import cutieCatImg from "../images/BodiCatAnimation.gif";
import ProjectCard from "../components/ProjectCard";

function CutieCats() {
	const img = cutieCatImg;
	const text =
		"BodhiCat's Cutie Cats is a React single page application. Using client-side routing, with React-Router. The application has full CRUD capabilities. Front-end is hosted on Netlify and with the Back-end hosted on Heroku.";
	const link = "";
	// const link = "https://cutiecats.netlify.app/"
	const title = "BodhiCat's Cutie Cats";
	const list = (
		<div>
			<ul>
				<li>JavaScript</li>
				<li>React</li>
				<li>CSS</li>
				<li>Bootstrap</li>
				<li>Styled-Components</li>
				<li>React-Router</li>
				<li>uuid</li>
			</ul>
			<ul className="git-links">
				<li>
					<a href="https://github.com/davidchedrick/phase2frontend/tree/main/phase-2-frontend">
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

export default CutieCats;
