import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	margin-top: 50px;
	width: 100%;
	height: 402px;
`;

export const List = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	position: relative;
	max-width: 1200px;
	height: 100%;

`;

export const Item = styled.div`
	margin: 0 7.5px 15px;
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
`;

export const Image = styled.img`
	width: 100%;

`;

export const ImgContainer = styled.div`
	width: 100%;
	height: 100%;
	transition: all ease-out 0.4s;
	&:hover {
		transform: scale(1.1);
	}
`;

export const Details = styled.div`
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
	bottom: 30px;
	right: 0;

	padding: 20px;
	text-align: center;
	background-color: #fff;
`;

export const Inner = styled.div`
	text-align: center;
	height: 100%;
`;

export const Title = styled.h3`
	color: #000;
	text-transform: uppercase;
	font-size: 16px;
	font-weight: 700;

	line-height: 1.4;
	overflow-wrap: break-word;
	word-wrap: break-word;
	color: #111;
	letter-spacing: 0.02em;

	cursor: pointer;
	user-select: none;
`;

export const Button = styled.button`
	appearance: none;
	display: inline-block;
	width: auto;
	text-decoration: none;
	text-align: center;

	vertical-align: middle;
	cursor: pointer;
	border: 2px solid rgba(0,0,0,0);
	padding: 7px 15px;
	background-color: #111;

	letter-spacing: 0.02em;
	color: #fff;
	font-size: 13px;
	font-weight: 400;
	text-transform: uppercase;

	line-height: 1;
	white-space: normal;
	border-radius: 0;
	margin-top: 10px;
`;