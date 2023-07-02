import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Social from "./social/Social";
import { Toggle } from "./toggle/Toggle";
import "../styles/Header.css";

function Header() {
	return (
		<>
			<Social />
			<HeaderDiv>
				<StyledLink to="/">
					<span className="title">David Chedrick.</span>
				</StyledLink>
				<Toggle />
			</HeaderDiv>
			<Nav />
		</>
	);
}

const MOBILE_BREAKPOINT = 700;

const HeaderDiv = styled.div`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	text-align: center;
	display: flex;
	flex-direction: row;
	padding: 0px;
	margin: 20px;
	justify-content: space-between;
	font-size: 50px;
	color: #da1598;
	@media (max-width: ${MOBILE_BREAKPOINT}px) {
		flex-direction: column-reverse;
		font-size: 3em;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
`;

export default Header;
