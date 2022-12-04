import ProjectCard from "./ProjectCards";

function Blogging() {
	const img = "";
	const text =
		"BodhiCat Blogging is a web application built on the client side with React. It is styled with Bootstrap and React-Bootstrap. The server side is Ruby on Rails with Active Record. With PostgreSQL as the database.";
	const link = "";

	const title = "BodhiCat's Blogging";
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
					<a href="https://github.com/davidchedrick/phase-4-project">
						GitHub Client
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

export default Blogging;
