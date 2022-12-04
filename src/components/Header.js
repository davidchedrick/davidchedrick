import styled from "styled-components";

function Header() {
	return <HeaderDiv>David Chedrick.</HeaderDiv>;
}

const HeaderDiv = styled.div`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	text-align: center;
	text-decoration: underline;
	padding: 20px;
	margin: 20px;
	font-size: 50px;
`;

export default Header;
