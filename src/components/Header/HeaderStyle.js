import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
  align-items: center;
	max-width: 89%;
	position: relative;

  z-index: 15;
  background-color: #ffffff;
	padding: 0 15px;
  min-height: 60px;
	margin: auto;

	box-sizing: 2px 2px 10px #ccc;
`;

export const Logo = styled.h1`
	margin: 0;
  min-width: 170px;
  max-width: 120px;
	flex: 1;
	width: 170px;
	height: 18.44px;
`;

// export const Link = styled.a`
// 	text-decoration: none;
// 	cursor: pointer;
// 	transition: color 0.45s ease-out;
// `;

export const Image = styled.img`
	width: 100%;
	display: block;
  max-width: 90px;
  max-height: 30px;
`;

export const Navigation = styled.nav`
	flex: 1;
	max-width: 830px;
`;

export const List = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Item = styled.li`
	position: relative;
	display: inline-block;
  text-align: left;
  margin-right: 10px;
	transition: transform 1s ease-out;
`;

export const Link = styled(RouterLink)`
	color: #111111;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;

  line-height: 40px;
  padding: 0 15px;
	text-decoration: none;
  letter-spacing: 0.02em;
  display: block;

	font-weight: 500;
	transition: color 0.45s ease-out;

	&:hover {
		color: #f77575;
	}
`;

export const Frame = styled.div`
	font-size: 18px;
	width: 20%;
	max-width: 170px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const Icon = styled.div`
	text-decoration: none;
	height: 30px;
	cursor: pointer;
`;

// SEARCH
export const SearchPopup = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	opacity: ${({ isShowSearchPopup }) => isShowSearchPopup ? '1' : 0};
	height: 80px;

	width: 100%;
	height: 160px;
	position: fixed;
	top: 0;
  left: 0;

	padding: 40px 50px;
  z-index: ${({ isShowSearchPopup }) => isShowSearchPopup ? '999' : '-1'};
	cursor: default;
	transition: all 0.15s ease-in-out;
	transform: translateY(${({ isShowSearchPopup }) => isShowSearchPopup ? '0' : '-160px'});
`;

export const SearchIcon = styled.a`
	text-decoration: none;
	height: 30px;
	cursor: pointer;
`;

export const SearchTitle = styled.h4`
	font-size: 15px;
	color: #050000;
	font-weight: 700;
	margin-bottom: 20px;
`;

export const Input = styled.input`
	color: #050000;
	padding: 5px 0;
	background: none;
	border: 0 none;
	outline: none;

	width: 100%;
	font-size: 15px;
`;

export const SearchBox = styled.form`
	height: 39px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ccc;
`;

export const CloseSearch = styled.button`
	color: #050000;
	font-size: 24px;
	position: absolute;
	top: 10px;
	right: 20px;

	cursor: pointer;
	border: none;
	background: transparent;
	outline: none;
`;

export const ButtonSearch = styled.button`
	border: none;
	outline: none;
	background: transparent;
	margin-top: 20px;
`;

export const Modal = styled.div`
	position: absolute;
	background: rgba(0, 0, 0, 0.6);
	top: 160px;
  left: 0;
	width: 100%;
	height: 100vh;
	${({ isShowSearchPopup }) => isShowSearchPopup && 'z-index: 1000'};
	${({ isShowSearchPopup }) => !isShowSearchPopup && 'display: none'};
`;

// SETTINGS
export const SettingsIcon = styled.a`
	text-decoration: none;
	height: 30px;
	cursor: pointer;
`;

export const SettingsPopup = styled.div`
	position: absolute;
	right: 40px;
	top: 90px;
	height: 130px;
	width: 300px;

	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	background-color: #fff;

	opacity: ${({ isShowSettingsPopup }) => isShowSettingsPopup ? '0.7' : '0'};
	display: ${({ isShowSettingsPopup }) => isShowSettingsPopup ? 'block' : 'none'};
	transition: all 0.25s ease-in-out;
	transform: translateY(${({ isShowSettingsPopup }) => isShowSettingsPopup ? '-30px' : '0'});
	cursor: default;

	box-shadow: 2px 2px 5px #333;
	z-index: 1;
`;

export const Text = styled.p`
	font-size: 13px;
	text-align: center;
	transition: color 1s ease-out;
	cursor: alias;

	& ${Link} {
		text-decoration: underline;
		margin-left: 3px;
	}

	&:hover ${Link} {
		text-decoration: none;
		color: #f06543;
		opacity: 0.8;
	}
`;

export const LoginBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	& ${Link},${Text} {
	text-transform: uppercase;
	}
`;

export const ButtonLoggin = styled.p`
	margin-bottom: 15px;
	background-color: #252525;
	width: 260px;
	height: 37px;

	font-weight: 300;
	font-size: 14px;
	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
	& ${Link} {
		color: #fff;
	}
`;

// CART
export const CartPopup = styled.div`
	max-width: 320px;
	height: 100%;
	display: flex;
	padding: 15px;
	width: 90%;

	right: 0px;
	top: 0px;
	position: fixed;
	z-index: 555;
	color: #050000;

	text-align: left;
	background-color: #ffffff;
	box-shadow: 0 0 15px rgba(5,0,0,0.1);
	transition: transform 0.25s ease-out;
	transform: translateX(${({ isShowCartPopup }) => isShowCartPopup ? '0' : '320px'});

	cursor: default;
	display: flex;
	flex-direction: column;
`;

export const CartTitle = styled.h4`
	color: #050000;
	font-size: 18px;
	text-align: left;
	margin: 0 0 10px;
	font-family: Poppins,sans-serif;

	font-weight: 700;
	line-height: 1.4;
	margin-bottom: 10px;
	width: 100%;
	height: 25px;

	cursor: auto;
`;

export const CartClose = styled.button`
	color: #696969;
	position: absolute;
	top: 15px;
	right: 20px;
	font-weight: 300;

	cursor: pointer;
	border: none;
	background: transparent;
	outline: none;
	font-size: 16px;
`;

export const CartIcon = styled.a`
	text-decoration: none;
	height: 30px;
	padding: 0 9px;
	position: relative;
	cursor: pointer;
`;

export const CartCount = styled.span`
	position: absolute;
	background: #000000;
	color: #ffffff;
	min-width: 16px;
	height: 16px;

	border-radius: 16px;
	line-height: 17px;
	font-size: 11px;
	right: -6px;
	top: -8px;
	text-align: center;
`;

export const CartList = styled.ul`
	list-style: none;
	width: 290px;
	height: auto;
	display: flex;
	flex-direction: column;
`;

export const CartItem = styled.li`
	padding: 15px 0;
	line-height: normal;
	border-top: 1px solid #eeeeee;
	width: 100%;
	display: flex;
`;

export const CartImage = styled.img`
	width: 72.5px;
	height: 92.781px;
	max-width: 100%;
`;

export const ProductDetail = styled.div`
	padding-left: 15px;
	text-align: left;
	width: 217px;
	height: auto;
	display: flex;
	flex-direction: column;
`;

export const ItemClose = styled.a`
	text-decoration: none;
	color: #050000;
  opacity: 0.5;
	padding: 7px;

	width: 16px;
	height: 14px;
	font-size: 12px;
	border: 1px solid #333;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const ProductTitle = styled.div`
	color: #050000;
	white-space: normal;
	text-decoration: none;
	display: block;
	line-height: 1.3;
	font-size: 13px;
	width: 182px;
`;

export const ProductVariant = styled.div`
	color: #a7a7a7;
	opacity: 0.6;
	padding: 5px 0;
	font-size: 13px;
`;

export const ProductPrice = styled.div`
	width: 100%;
`;

export const Span = styled.span`
	font-size: 13px;
`;

export const SubTotal = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0;
	line-height: normal;

	font-size: 16px;
	text-align: left;
	font-weight: 700;
	width: 100%;
`;

export const SubTotalItem = styled.span`
	text-transform: uppercase;
`;

export const Options = styled.div`
	font-size: 14px;
	width: 100%;
`;

export const FreeShip = styled.p`
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.4px;
`;

export const CartTerm = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
`;

export const Checkbox = styled.input`
	font-size: 13px;
	margin-right: 10px;
`;

export const Form = styled.form`
	width: 100%;
`;

export const CheckoutButton = styled.button`
	color: white;
	background-color: #111;
	border: none;
	padding: 10px 25px;
	border: 2px solid rgba(0,0,0,0);

	height: 37px;
	width: 290px;
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 400;

	letter-spacing: 0.02em;
	text-transform: uppercase;
	line-height: 1;
	white-space: normal;
	border-radius: 0;

	margin-top: 20px;
	margin-bottom: 15px;
	cursor: pointer;
`;

export const ViewCart = styled.a`
	color: #fff;
	background-color: #e34848;
	border-color: rgba(0,0,0,0);
	text-decoration: none;
	appearance: none;

	display: inline-block;
	width: auto;
	text-decoration: none;
	text-align: center;
	vertical-align: middle;

	cursor: pointer;
	border: 2px solid rgba(0,0,0,0);
	font-family: Poppins,sans-serif;
	font-size: 13px;
	font-weight: 400;

	text-transform: uppercase;
	line-height: 1;
	white-space: normal;
	width: 100%;
	height: 37px;
	padding: 10px 25px;
`;