import { Container, Row } from "react-bootstrap";
import ChoreList from "../pages/ChoreList";
import Blogging from "../pages/Blogging";
import BodhiSpot from "../pages/BodhiSpot";
import CatsGalore from "../pages/CatsGalore";
import CutieCats from "../pages/CutieCats";

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
