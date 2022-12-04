import { Container, Row } from "react-bootstrap";
import ChoreList from "./ ChoreList";
import Blogging from "./Blogging";
import BodhiSpot from "./BodhiSpot";
import CatsGalore from "./CatsGalore";
import CutieCats from "./CutieCats";

function ProjectArea() {
	return (
		<Container>
			<Row>
				<BodhiSpot />
			</Row>
			<Row>
				<Blogging />
			</Row>
			<Row>
				<ChoreList />
			</Row>
			<Row>
				<CutieCats />
			</Row>
			<Row>
				<CatsGalore />
			</Row>
		</Container>
	);
}

export default ProjectArea;
