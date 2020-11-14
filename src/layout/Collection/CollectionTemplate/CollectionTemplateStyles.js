import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	height: 100%;

	@media only screen and (min-width: 1025px) {
		body {
    letter-spacing: 0.02em;
		}
	}
`;

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 15px;
	padding-right: 15px;
	display: flex;
`;

//LEFT SIDEBAR
export const LeftSidebar = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	height: 100%;
	width: 25%;

	transition: all 0.4s ease-in-out;
`;

export const SidebarTags = styled.div`
	animation-name: fadeInUp;
	width: 100%;

	@keyframes fadeInUp{
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const SidebarWidget = styled.div`
	margin-bottom: 10px;
	width: 100%;
`;

export const WidgetTitle = styled.div`
	color: #111111;
	font-size: 15px;
	margin-bottom: 10px;
	font-weight: 700;
	letter-spacing: 0.2px;

	position: relative;
	text-transform: uppercase;
`;

export const WidgetContent = styled.div`
	padding: 0;
    margin-bottom: 30px;
`;

export const WidgetList = styled.ul`
	list-style: none;
	width: 100%;
`;

export const WidgetItem = styled.li`
	padding: 4px 0;
`;

export const Link = styled(RouterLink)`
	text-decoration: none;
	color: #000;
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
`;

export const Checkbox = styled.input`
	width: 16px;
	height: 16px;
	border: 1px solid #cdcdcd;
	margin: 0.25em 0.5em 0.25em 0.25em;
`;

export const Label = styled.label`
	font-weight: 400;
  font-size: 12px;
`;

//RIGHT SIDEBAR
export const RightSidebar = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	height: 100%;
	width: 75%;
`;

export const CollectionBanner = styled.div`
	margin-bottom: 20px;
	position: relative;
	width: 100%;
	height: 100%;

	background-position: 50% 50%;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgba(0,0,0,0);
`;

export const CollectionTitle = styled.h1`
	font-size: 18px;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 0;
	margin: 0 0 20px 0;
	
	color: #111111;
`;

export const CollectionDescription = styled.div`
	margin-bottom: 30px;
	width: 100%;
	height: 100%;
`;

export const ProductList = styled.div`
	width: 100%;
	height: 100%;
`;

export const Toolbar = styled(ProductList)``;

export const FiltersToolbar = styled.div`
	display: table;
	table-layout: fixed;
	margin-bottom: 15px;

	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const ItemCount = styled.div`
	width: auto;
  text-align: center;
	padding: 10px;
`;

export const ProductCount = styled.span`
	font-size: 0.92308em;
	margin-bottom: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Sort = styled.div`
	width: 130px;
`;

export const Select = styled.div`
	font-size: 12px;
	height: auto;
	margin: 0;
	border: none;
	outline: none;
`;

// LIST PRODUCTS
export const Grid = styled.div`
	margin: 0 -15px;
	padding: 0;
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(3,33%);
`;

export const GridItem = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	width: 100%;
	height: 100%;
`;