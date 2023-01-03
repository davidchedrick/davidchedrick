import Header from "./Header";
import ProjectArea from "./ProjectArea";
import styled, { createGlobalStyle } from "styled-components";

import "bootstrap/dist/css/bootstrap.css";

const GlobalStyles = styled.div`
	/* @font-face {
		font-family: "radnika_next";
		src: url("/static/radnikanext-medium-webfont.woff2") format("woff2");
		font-weight: normal;
		font-style: normal;
	} */
	html {
		--red: #ff0000;
		--black: #393939;
		--grey: #3a3a3a;
		--gray: var(--grey);
		--lightGrey: #e1e1e1;
		--lightGray: var(--lightGrey);
		--offWhite: #ededed;
		--maxWidth: 1000px;
		--bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
		box-sizing: border-box;
		font-size: 10px;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	body {
		font-family: "radnika_next", --apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
	}
	a {
		text-decoration: none;
		color: var(--black);
	}
	a:hover {
		text-decoration: underline;
	}
	button {
		font-family: "radnika_next", --apple-system, BlinkMacSystemFont,
			"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
			"Helvetica Neue", sans-serif;
	}
`;

function App() {
	return (
		<GlobalStyles className="App">
			<Header />
			<ProjectArea />
		</GlobalStyles>
	);
}

export default App;
