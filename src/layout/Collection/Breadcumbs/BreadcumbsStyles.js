import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	background: #f9f9f9;
	margin: 0 0 30px;
	width: 100%;
	height: 34px;
`;

export const Navbar = styled.nav`
	padding: 8px 15px;
	max-width: 1200px;
  margin: 0 auto;
	height: 100%;
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
	color: #111;
	padding-right: 3px;
	margin-right: 3px;
	font-size: 12px;

	&:hover {
		opacity: 0.8;
	}
`;

export const Symbol = styled.span`
	padding-right: 3px;
	margin-right: 3px;
	height: 16px;
`;

export const Title = styled.span`
	padding-right: 3px;
	margin-right: 3px;
	height: 16px;
	font-weight: bold;
`;