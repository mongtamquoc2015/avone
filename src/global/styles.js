import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
	color: #333;
  font-size: 13px;
  line-height: 1.4;
  margin: 0;
  padding: 0;
	font-family: Poppins,Arial,Tahoma,Verdana,sans-serif;
	}
`;