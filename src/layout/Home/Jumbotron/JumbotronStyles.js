import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	padding: 0 15px;
	max-width: 1200px;
  margin: 20px auto 0 auto;
	height: 997px;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	height: auto;
  grid-gap: 10px;

	width: 100%;
	height: 100%;
	list-style: none;
`;

export const Item = styled.li`
	position: relative;
	width: 575px;
`;

export const Image = styled.div`
	overflow: hidden;
	width: 100%;
	position: absolute;	
	cursor: pointer;

	& img {
		transition: transform 0.45s ease-out;
		width: 100%;
		height: 100%;
	}

	&:hover img{
		transform: scale(1.1);
	}
`;

export const Detail = styled.div`
	width: 194px;
	height: 143px;
	padding: 20px;
	display: flex;
	flex-direction: column;

	text-align: center;
	background-color: white;
	position: relative;
	/* bottom: 130px; */
	transform: translate(-50%,-50%);
	top: 80%;
	left: 50%;
`;

export const Title = styled.h3`
	text-transform: uppercase;
	font-weight: 700;
	color: #000;
	width: 100%;
`;

export const Text = styled.p`
	margin: 5px 0 0;
`;

export const Button = styled.button`
	margin-top: 10px;
	padding: 8px 20px;
	background-color: #111;
	cursor: pointer;
	border: 2px solid rgba(0,0,0,0);

	letter-spacing: 0.02em;
	color: #fff;
	font-family: Poppins,sans-serif;
	font-size: 13px;
	font-weight: 400;

	text-transform: uppercase;
	line-height: 1;
	white-space: normal;
	border-radius: 0;

	&:hover {
		color: #ffffff;
    background-color: #262525;
    border: 2px solid #030505;
    opacity: 1;
	}
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
	color: #fff;
`;