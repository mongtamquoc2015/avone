import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.footer`
	width: 100%;
	color: #111111;
	background-color: #fafafa;
	border-top: 1px solid #ffffff;
	padding: 0;
`;

export const FooterTop = styled.div`
	padding-top: 35px;
	padding-bottom: 35px;
`;

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 15px;
	padding-right: 15px;
`;

export const List = styled.div`
	display: flex;
`;

export const Item = styled.div`
	margin-bottom: 30px;
	padding-left: 30px;
	max-width: 100%;
	flex: 0 0 auto;
	height: 100%;
	width: 240px;
`;

export const Logo = styled.p`
	margin: 0 0 15px 0;
	width: 100%;
`;

export const Image = styled.img`
	width: 150px;
	height: 30px;
`;

export const TextContent = styled.div`
	margin-bottom: 15px;
	width: 100%;
`;

export const Text = styled.p`
	margin: 0 0 15px 0;
`;

export const TextLink = styled.a`
	text-decoration: none;
	color: #111;

	&:hover {
		opacity: 0.7;
	}
`;

export const SocialIcons = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const Icon = styled.li`
	text-align: center;
	height: 28px;
	width: 26px;
`;

export const Title = styled.h4`
	color: #000000;
	font-size: 1em;
	letter-spacing: 0.5px;
	margin: 0 0 15px;
	text-transform: uppercase;
`;

export const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
`;

export const NavItem = styled.li`
	margin-bottom: 7px;
	
	&:hover {
		opacity: 0.7;
	}
`;

export const Links = styled(RouterLink)`
	text-decoration: none;
	color: #111;
`;

export const Form = styled.div`
	width: 190px;
	height: 86px;
	display: flex;
	flex-direction: column;
`;

export const TextField = styled.input`
	color: #000000;
	background-color: #ffffff;
	margin-bottom: 10px;
	border-radius: 0;
	padding: 0 18px;

	outline: none;
	border: 1px solid #ccc;
	width: 152px;
	height: 36px;
`;

export const Button = styled.button`
	text-transform: uppercase;
	border: 0;
	font-size: 11px;
	letter-spacing: 0.5px;
	padding: 0 18px;

	color: #ffffff;
	background-color: #000000;
	height: 50%;
	width: 50%;
	cursor: pointer;
`;

export const FooterBottom = styled.div`
	background: #ffffff;
	color: #111111;
	clear: both;
	padding: 15px 0;
	border-top: 1px dotted #eeeeee;

	width: 100%;
	height: 100%;
	text-align: center;
`;