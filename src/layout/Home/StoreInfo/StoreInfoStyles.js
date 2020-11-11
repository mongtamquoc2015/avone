import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 50px;
	width: 100%;
	background-color: #111;
`;

export const Inner = styled.div`
	padding: 30px 0;
	width: 100%;
`;

export const List = styled.ul`
	list-style: none;
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 15px;
	padding-right: 15px;

	display: flex;
	align-items: center;
`;

export const Item = styled.li`
	flex: 1;
  padding: 10px 20px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TextContent = styled.div`
	width: 200px;
	height: 42px;
`;

export const Title = styled.h5`
	text-transform: uppercase;
	color: #fff;
	margin-bottom: 5px;
	letter-spacing: 0.05em;
	font-size: 14px;
`;

export const SubTitle = styled.span`
	color: #fff;
`;

export const Icon = styled.div`
	color: #eeeeee;
	font-size: 40px;
	width: 50px;
	margin-right: 10px;
`;