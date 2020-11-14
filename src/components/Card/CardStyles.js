import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	height: 100%;
	width: 100%;
	text-align: center;
  border: 1px solid rgba(0,0,0,0);
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
	height: 100%;
`;

export const ProductButtons = styled.div`
	bottom: -10px;
	width: 100%;
	font-size: 0px;
	position: absolute;
	left: 0;

	opacity: 0;
	z-index: 444;
	transition: all 0.3s ease-out;
`;

export const ImageContainer = styled.div`
	width: 100%;
	overflow: hidden;
	position: relative;
	z-index: 1;

	transition: all 0.3s ease-out;

	&:hover ${ProductButtons} {
		bottom: 10px;
		opacity: 1;	
	}
`;

export const Button = styled.button`
	opacity: 1;
	margin-top: 2px;
	display: inline-block;
	border: 0;
	background-color: #111111;

	position: relative;
	font-size: 18px;
	padding: 0;
	margin: 2px;
	line-height: 35px;

	width: 100%;
	height: 36px;
	width: 38px;
	text-align: center;
	border-radius: 4px;

	cursor: pointer;
`;

export const Icon = styled.div`
	color: #ffffff;
	margin-top: -2px;
	font-style: normal;
	font-weight: 300;

	font-variant: normal;
	text-transform: none;
	line-height: 1;
`;

export const Details = styled.div`
	width: 100%;
	padding: 15px 10px 10px;
	text-align: center;
`;

export const Title = styled(Link)`
	color: #111111;
	font-size: 13px;
	text-transform: none;
	font-weight: normal;
	transition: all .3s ease-in-out;

	&:hover {
		opacity: 0.8;
	}
`;

export const Meta = styled.div`
	width: 100%;
	margin: 5px 0 10px;	
`;

export const Price = styled.span`
	font-size: 14px;
	font-weight: 400;
	display: inline-block;
	color: #222222;
`;

export const Review = styled.div`
	width: 100%;
	line-height: 1;
    margin-bottom: 14px;
`;

export const Badge = styled.div`
	width: 100%;
	margin: 0 3px 0 0;
`;

export const StarIcon = styled.div`
	color: #ffbc03;
`;