import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	margin: 50px auto 0;
	max-width: 1200px;
	padding: 0 15px;
`;

export const TopContent = styled.div`
	padding-bottom: 35px;
	text-align: center;
`;

export const Title = styled.h3`
	font-size: 22px;
	line-height: 1.3;
	max-width: 400px;
	margin: 0 auto;
	color: #111111;

	height: 28px;
	text-transform: uppercase;
	text-align: center;
`;

export const SubTitle = styled.span`
	max-width: 600px;
	margin: 5px auto 0;
	font-size: 13px;
	line-height: 1.4;
	text-align: center;
`;

export const SlickSlider = styled.div`
	position: relative;
	user-select: none;
	width: 100%;
	height: 545px;
`;

export const GridContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

export const ProductButtons = styled.div`
	position: absolute;
	bottom: 0px;
	width: 268px;
	height: 40px;

	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3 ease-out;
`;

export const Card = styled.div`
	width: 268px;
	height: 343px;
	position: relative;

	&:hover ${ProductButtons} {
		bottom: 10px;
		opacity: 1;
		animation-name: toTop;
		animation-duration: 0.2s;
	}

	@keyframes toTop {
		0% {
			bottom: 2px;
		}
		25% {
			bottom: 4px;
		}
		50% {
			bottom: 6px;
		}
		75% {
			bottom: 8px;
		}
		100% {
			bottom: 10px;
		}
	}
`;

export const Image = styled.div`
	position: absolute;
	width: 266px;
	height: 341px;
	transition: all 0.25s ease-out;
	
	background: url(${({ defaultSrc }) => defaultSrc});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	&:hover {
		background: url(${({ hoverSrc }) => hoverSrc});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;

export const GridItem = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 0 10px;
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
	position: relative;
	width: 100%;
	height: 100%;
	color: #fff;
`;

export const Button = styled.button`
	width: 38px;
	height: 36px;
	background-color: #252525;
	border: none;
	text-decoration: none;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 5px;

	outline: none;
	margin-right: 5px;
	color: #fff;
`;

export const Icon = styled.i`
	width: 18px;
	height: 16px;
	color: #fff !important;
	font-style: normal;

	font-weight: 400;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
`;

export const ToolTipLabel = styled.span`
	font-size: 11px;
	text-transform: none;
	line-height: 18px;
	transition: all 0.2s ease-in-out;
	visibility: hidden;

	opacity: 1;
	background: #000000;
	color: #ffffff;
	border-radius: 0;
	padding: 0 5px;

	letter-spacing: -0.2px;
	white-space: nowrap;
	position: absolute;
`;

export const Details = styled.div`
	margin-top: 15px;
	width: 268px;
	height: 131px;
	text-align: center;
`;

export const DetailsTitle = styled(RouterLink)`
	color: #111111;
	font-size: 13px;
	font-weight: normal;
	text-decoration: none;

	&:hover {
		opacity: 0.8;
	}
`;

export const DetailsPrice = styled.div`
	margin: 5px 0 10px;
	width: 286px;
	height: 19px;
	text-align: center;	
`;

export const Price = styled.span`
	font-size: 14px;
	font-weight: 400;
	display: inline-block;
	color: #f77575;
`;

export const ProductReview = styled.div`
	width: 286px;
	height: 14px;
	line-height: 1;
  margin-bottom: 14px;
`;

export const BadgeIcon = styled.span`
	color: #feb739;
`;

export const ProductLabel = styled.div`
	position: absolute;
	left: 5px;
	top: 5px;
	z-index: 11;
	width: 34px;

	height: 24px;
`;

export const Label = styled.span`
	right: 5px;
	color: #ffffff;
	font-size: 11px;
	text-transform: uppercase;

	margin-bottom: 5px;
	letter-spacing: 0;
	white-space: nowrap;
	line-height: 18px;
	text-align: center;

	padding: 0 5px;
	height: 19px;
	background-color: #ff708e;
`;