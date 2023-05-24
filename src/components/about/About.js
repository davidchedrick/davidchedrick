import { Card, Col, Container, Row } from "react-bootstrap";
import daivdHead from "./aboutImages/pink-head.png";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
	return (
		<>
			<div className="m-4 about-container">
				<Card className="about-card">
					<Row className="about-row">
						<Col className="about-col">
							<Card.Body>
								<h2>Hello! I am David Chedrick</h2>
								<p>
									I'm a Software Engineer from Austin, TX,
									with hands-on experience in full-stack web
									development.
								</p>
								<h3>My Journey</h3>
								<p>
									My journey into software development was
									honed at Flatiron School's intensive 60-week
									Full Stack Software Engineering program.
									Here, I developed, tested, and maintained a
									range of projects, gaining an understanding
									of the entire development life cycle.
								</p>
								<h3>Portfolio</h3>
								<p>
									My portfolio includes interactive web
									applications, single-page sites, and social
									apps, all showcasing my skills in front-end
									and back-end development, as well as RESTful
									design principles.
								</p>
								<h3>Technical Skills</h3>
								<ul>
									<li>
										<strong>Front-end:</strong> JavaScript,
										React, Next.js, HTML, CSS, Jest, Apollo
										Client
									</li>
									<li>
										<strong>Back-end:</strong> Ruby, Rails,
										PostgreSQL, MongoDB, Keystone.js,
										GraphQL, SQLite, Active Record
									</li>
									<li>
										<strong>Styling:</strong> Bootstrap,
										Material-UI, Styled-Components
									</li>
								</ul>
								<Link
									to="/cv"
									className="btn btn-primary btn-lg btn-block"
								>
									View My CV
								</Link>
							</Card.Body>
						</Col>
						<Col className="image-col">
							<Container>
								<Card.Img
									variant=""
									src={daivdHead}
									className="about-image"
								/>
							</Container>
						</Col>
					</Row>
				</Card>
			</div>
		</>
	);
}
