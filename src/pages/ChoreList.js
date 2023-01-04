import ProjectCard from "../components/project/ProjectCard";
import bodhiChoresImg from "../images/bodhiChores.gif";

function ChoreList() {
	const img = bodhiChoresImg;
	const text =
		"BodhiCat's Chore List is a web application built on the client side with React. It is styled with Bootstrap, React-Bootstrap, and Styled-Components. The server side is with Ruby, Sinatra, Active Record, and SQLite.";
	const link = "";

	const title = "BodhiCat's ChoreList";
	const list = (
		<div>
			<ul>
				<li>React</li>
				<li>CSS</li>
				<li>Bootstrap</li>
				<li>Styled-Components</li>
				<li>React-Router</li>
				<li>Ruby</li>
				<li>Active Record</li>
				<li>Sinatra</li>
				<li>SQLite</li>
			</ul>
			<ul className="git-links">
				<li>
					<a href="https://github.com/davidchedrick/phase-3-client">
						GitHub Client
					</a>
				</li>
				<li>
					<a href="https://github.com/davidchedrick/phase-3-server">
						GitHub Server
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

export default ChoreList;
