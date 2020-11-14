import styled from 'styled-components';

export const Container = styled.div`
	color: #fff;
	line-height: 33px;
	cursor: pointer;
	font-size: 20px;
	height: 35px;

	right: 20px;
	position: fixed;
	border-radius: 50%;
	text-align: center;

	width: 35px;
	bottom: 40px;
	z-index: 444;
	display: ${({ isShowSiteScroll }) => isShowSiteScroll ? 'block' : 'none'};
	background: #ffad00;

	transition: all 0.5s ease-in-out;
`;

export const Icon = styled.span`
	font-style: normal;
	font-weight: 400;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	font-size: 16px;
`;