import ProjectCard from "../components/ProjectCard";
import bodhiSpotImg from "../images/bodhiSpot.gif";

function BodhiSpot() {
	const img = bodhiSpotImg;
	const text =
		"BodhiSpot is a web application built on the client side with React. It is styled with Bootstrap and React-Bootstrap. The server side is Ruby on Rails with Active Record. With PostgreSQL as the database.";
	const link = "";
	// const link = "https://cutiecats.netlify.app/"
	const title = "BodhiSpot";
	const list = (
		<div>
			<ul>
				<li>JavaScript</li>
				<li>React</li>
				<li>CSS</li>
				<li>Bootstrap</li>
				<li>React-Router</li>
				<li>Ruby</li>
				<li>Active Record</li>
				<li>PostgreSQL</li>
			</ul>
			<ul>
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

export default BodhiSpot;
