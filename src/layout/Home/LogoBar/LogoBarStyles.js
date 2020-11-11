import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	margin-top: 50px;
	width: 100%;
	max-width: 1200px;
	margin: 50px auto 0;
	padding: 0 15px;
`;

export const List = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const Item = styled.div`
	width: 240px;
	padding: 0 15px;
	height: 100%;
	text-align: center;
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
	width: 100%;
	height: 100%;
`;

export const Image = styled.img`
	width: 146px;
	margin: auto;
`;