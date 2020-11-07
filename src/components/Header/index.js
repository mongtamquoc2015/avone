import React, { useState } from 'react';
import {
	Container,
	Frame, Icon, Image,
	Item, ItemLink, Link,
	List, Logo, Navigation,
	SearchBox, CloseSearch, SearchPopup,
	SearchTitle, SearchIcon, Input, Modal,
	ButtonSearch, SettingsIcon, SettingsPopup,
	ButtonLoggin, LoginBox, Text, CartPopup, CartTitle,
	CartClose, CartCount, CartIcon, CartList, CartItem,
	CartImage, ProductDetail, ItemClose, ProductTitle,
	ProductVariant, ProductPrice, Span, SubTotal,
	SubTotalItem, Options, FreeShip, CartTerm, Checkbox,
	CheckoutButton, Form, ViewCart
} from './HeaderStyle';

const Header = () => {
	const [isShowSearchPopup, setIsShowSearchPopup] = useState(false);
	const [isShowSettingsPopup, setIsShowSettingsPopup] = useState(false);
	const [isShowCartPopup, setIsShowCartPopup] = useState(false);

	const toggleSearchPopup = () => {
		setIsShowSearchPopup(!isShowSearchPopup);
	}

	const toggleSettingsPopup = () => {
		setIsShowSettingsPopup(!isShowSettingsPopup);
	}

	const toggleCartPopup = () => {
		setIsShowCartPopup(!isShowCartPopup);
	}

	return (
		<Container>
			<Logo>
				<Link href="/">
					<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/avon-logo.svg?v=8449398188089342562" />
				</Link>
			</Logo>
			<Navigation>
				<List>
					<Item>
						<ItemLink href="#">Home</ItemLink>
					</Item>
					<Item>
						<ItemLink href="#">Shop</ItemLink>
					</Item>
					<Item>
						<ItemLink href="#">Features</ItemLink>
					</Item>
					<Item>
						<ItemLink href="#">Lookbook</ItemLink>
					</Item>
					<Item>
						<ItemLink href="#">Pages</ItemLink>
					</Item>
					<Item>
						<ItemLink href="#">Blog</ItemLink>
					</Item>
					<Item>
						<ItemLink href="#">Buy Now</ItemLink>
					</Item>
				</List>
			</Navigation>
			<Frame>
				<SearchIcon>
					<i
						onClick={toggleSearchPopup}
						className="fas fa-search"
					/>
					<SearchPopup isShowSearchPopup={isShowSearchPopup}>
						<CloseSearch onClick={toggleSearchPopup}>x</CloseSearch>
						<SearchTitle>What are you looking for?</SearchTitle>
						<SearchBox>
							<Input placeholder="Search for products,brands and more" />
							<ButtonSearch type="submit">
								<Icon><i className="fas fa-search" /></Icon>
							</ButtonSearch>
						</SearchBox>
						<Modal isShowSearchPopup={isShowSearchPopup} />
					</SearchPopup>
				</SearchIcon>
				<SettingsIcon>
					<i
						className="fas fa-cog"
						onClick={toggleSettingsPopup}
					/>
					<SettingsPopup isShowSettingsPopup={isShowSettingsPopup}>
						<LoginBox>
							<ButtonLoggin>
								<Link to="/account/login">Login</Link>
							</ButtonLoggin>
							<Text>
								New user?
								<Link to="/account/register">Register now</Link>
							</Text>
						</LoginBox>
					</SettingsPopup>
				</SettingsIcon>
				<Icon to="/pages/wishlist">
					<i className="far fa-heart"></i>
				</Icon>
				<CartIcon>
					<i
						onClick={toggleCartPopup}
						className="fas fa-shopping-bag"
					>
					</i>
					<CartCount onClick={toggleCartPopup}>1</CartCount>
					<CartPopup isShowCartPopup={isShowCartPopup}>
						<CartClose onClick={toggleCartPopup}>
							<i class="fas fa-times"></i>
						</CartClose>
						<CartTitle>Your cart</CartTitle>
						<CartList>
							<CartItem>
								<Link to="#item">
									<CartImage src="https://cdn.shopify.com/s/files/1/0036/7306/3491/products/5_bd6ed3ed-d2c8-45c2-b04f-7582fd87f76e.jpg?v=1570444158" />
								</Link>
								<ProductDetail>
									<ProductTitle>
										<Link to="#sneaker">Lace Up Low Top Sneaker</Link>
									</ProductTitle>
									<ProductVariant>39 / White</ProductVariant>
									<ProductPrice>
										<Span>$402 x 1</Span>
									</ProductPrice>
								</ProductDetail>
								<ItemClose>
									<i class="fas fa-times"></i>
								</ItemClose>
							</CartItem>
							<CartItem>
								<SubTotal>
									<SubTotalItem>Subtotal:</SubTotalItem>
									<SubTotalItem>$424.00</SubTotalItem>
								</SubTotal>
							</CartItem>
							<CartItem>
								<Options>
									<FreeShip>
										<i class="fas fa-truck"></i>
										You have got
										<b> FREE SHIPPING</b>
									</FreeShip>
									<CartTerm>
										<Checkbox type="checkbox" />
										<label> I agree with the terms and conditions</label>
									</CartTerm>
									<Form>
										<CheckoutButton type="submit">Process To Checkout</CheckoutButton>
									</Form>
									<ViewCart>View Cart</ViewCart>
								</Options>
							</CartItem>
						</CartList>
					</CartPopup>
				</CartIcon>
			</Frame>
		</Container>
	)
}

export default Header;