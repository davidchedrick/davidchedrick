import { Card, Container, Row } from "react-bootstrap";
import "./CV.css";

export default function CV() {
	return (
		<div className="m-5 cv-container">
			<Card className="cv-page p-4">
				<h2 className="text-center my-4">David Chedrick</h2>

				<Row className="text-center my-4">
					<h4>Contact Information</h4>
					<span>Austin, TX | DavidChedrick@gmail.com</span>
					<p>
						<a
							href="https://linkedin.com/in/davidchedrick"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>{" "}
						|
						<a
							href="https://github.com/davidchedrick"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>{" "}
						|
						<a
							href="https://dev.to/davidchedrick"
							target="_blank"
							rel="noopener noreferrer"
						>
							Blog
						</a>{" "}
						|
						<a
							href="https://davidchedrick.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							DavidChedrick.com
						</a>
					</p>
				</Row>

				<Row className="my-4">
					<h4>Professional Profile</h4>
					<p>
						Full-stack Software Engineer with demonstrated
						proficiency in JavaScript, React, and other modern
						technologies. Completed an exhaustive 60-week Full Stack
						Software Engineering program at Flatiron School.
						Experienced in designing, developing, testing, and
						maintaining a variety of software projects. Seeking
						opportunities to leverage my technical skills and
						enthusiasm for software development to contribute to
						innovative projects in a forward-thinking company.
					</p>
				</Row>

				<Row className="my-4">
					<h4>Technical Skills</h4>
					<ul>
						<li>
							Front-end: JavaScript, React, Next.js, HTML, CSS,
							Jest, Apollo Client
						</li>
						<li>
							Back-end: Ruby, Rails, PostgreSQL, MongoDB,
							Keystone.js, GraphQL, SQLite, Active Record
						</li>
						<li>
							Styling: Bootstrap, Material-UI, Styled-Components
						</li>
					</ul>
				</Row>

				<Row className="my-4">
					<h4>Professional Experience</h4>
					<h5>Freelance Software Testing - Test IO</h5>
					<p>Austin, TX, October 2022 - Present</p>
					<p>
						Perform in-depth software testing to identify and report
						a variety of bug types. Meticulously examine software
						products, document discoveries, and provide valuable
						suggestions to enhance user experience and product
						quality.
					</p>
					<h5>Manager, Customer Experience and Sales - Macy's</h5>
					<p>Austin, TX, December 2012 - Present</p>
					<p>
						Direct all business development efforts for a team of
						30+ employees, leading to a 10% sales increase and
						generating over $10M in annual revenue. Utilize data
						analysis to interpret sales and customer trends,
						developing strategies that stimulate growth, reduce
						costs, and improve customer satisfaction. Construct and
						administer training programs to boost employee
						performance and productivity.
					</p>
				</Row>

				<Row className="my-4">
					<h4>Education</h4>
					<h5>Flatiron School</h5>
					<p>
						Full Stack Software Engineering Program, Austin, TX,
						August 2021 - September 2022
					</p>
					<p>
						Engaged in a rigorous 60-week full-stack software
						engineering program, where I developed, tested,
						debugged, and maintained a multitude of projects.
						Acquired skills in state management, RESTful APIs, and
						CRUD operations, along with implementing crucial
						functionalities such as authorization, authentication,
						and validation. I gained familiarity with
						industry-standard tools and excelled in applying agile
						methodologies within cross-functional teams.
					</p>
					<h5>Austin Community College</h5>
					<p>
						Associate of Applied Science (Mathematics Focus),
						Austin, TX, August 2012 - May 2014
					</p>
					<p>
						Focus on Mathematics, developing a strong foundation in
						quantitative reasoning, analytical thinking, and
						problem-solving.
					</p>
				</Row>

				<Row className="my-4">
					<h4>Technical Projects</h4>
					<h5>CatsGalore</h5>
					<p>
						A cat-themed website that offers an engaging user
						experience through a fun flip card game. Led the design
						of the user interface with HTML and CSS, and constructed
						the game logic using JavaScript.
						<a href="GitHub link here">GitHub</a> |{" "}
						<a href="Site link here">Site</a>
					</p>
					<h5>BodhiCat's Cutie Cats</h5>
					<p>
						A dedicated single feed page for posting the cutest cat
						photos. Built using React and Bootstrap, and integrated
						with a JSON-based RESTful API to implement full CRUD
						functionality, demonstrating proficiency in RESTful
						design principles.
						<a href="GitHub link here">GitHub</a> |{" "}
						<a href="Site link here">Site</a>
					</p>
					<h5>BodhiSpot</h5>
					<p>
						A comprehensive social app that enables users to post
						blogs, engage in chat rooms, and send direct messages.
						Utilized React for the front-end, Bootstrap for styling,
						Ruby on Rails for the backend, and PostgreSQL for data
						storage. Implemented robust CRUD operations and
						authentication features, showcasing my full-stack
						development capabilities.
						<a href="GitHub link here">GitHub</a>
					</p>
				</Row>
			</Card>
		</div>
	);
}
