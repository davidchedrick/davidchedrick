import styled from "styled-components";
import { Toggle } from "./Toggle";

function Header() {
	return (
		<HeaderDiv>
			<span className="title">David Chedrick.</span>

			<Toggle />
		</HeaderDiv>
	);
}

const HeaderDiv = styled.div`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	text-align: center;
	text-decoration: underline;
	display: flex;
	flex-direction: row;
	padding: 20px;
	justify-content: space-between;
	margin: 20px;
	font-size: 50px;
	color: #da1598;
`;

export default Header;
