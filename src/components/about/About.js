import { Card, Col, Container, Row } from "react-bootstrap";
import daivdHead from "./aboutImages/pink-head.png";
import "./About.css";
// import { Link } from "react-router-dom";

export default function About() {
	return (
		<>
			<div className="m-4 about-container">
				<Card className="about-card">
					<Row className="about-row">
						<Col className="about-col">
							<Card.Body>
								<h2>Welcome! I am David Chedrick</h2>
								<p>
									Results-driven professional with over a
									decade of experience in sales, customer
									experience, and business management. Proven
									track record in leading diverse teams,
									developing growth strategies, and enhancing
									customer satisfaction. Proficient in
									utilizing data analysis tools to inform
									strategic decisions and drive results.
								</p>

								<h3>Skillset</h3>
								<ul>
									<li>
										<strong>Team Leadership:</strong>{" "}
										Experience in leading and inspiring
										diverse teams, fostering a culture of
										inclusion, accountability, and high
										performance.
									</li>
									<li>
										<strong>
											Customer-Centric Approach:
										</strong>
										Demonstrated commitment to enhancing
										customer satisfaction through continuous
										improvement initiatives, data-driven
										insights, and tailored solutions.
									</li>
									<li>
										<strong>
											Cross-functional expertise:
										</strong>{" "}
										Skilled in collaborating across
										departments, fostering communication
										between various teams to streamline
										operations and achieve overarching
										organizational goals.
									</li>
									<li>
										<strong>
											Data-Driven Decision-Making:
										</strong>
										Proficient in utilizing data analysis
										tools, such as PowerBI and Excel, to
										inform strategic decisions, identify
										trends, and drive data-backed results.
									</li>
									<li>
										<strong>
											Innovation and Adaptability:
										</strong>{" "}
										Known for a persistent drive for
										innovation, continually exploring and
										implementing solutions to optimize
										processes and deliver results.
									</li>
								</ul>
								<h3>Technical Proficiencies</h3>
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
								{/* <Link
									to="/cv"
									className="btn btn-primary btn-lg btn-block"
								>
									View My CV
								</Link> */}
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
