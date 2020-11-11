import React from 'react'
import {
	Button,
	Container, FooterTop,
	Form,
	GridContainer,
	GridItem,
	Icon, Image, Inner, Item,
	Links, List, Logo,
	Menu, NavItem, SocialIcons, Text, TextContent,
	TextField,
	TextLink, Title, FooterBottom, GridItemText
} from './FooterStyles'

const Footer = () => {
	return (
		<Container>
			<FooterTop>
				<Inner>
					<List>
						<Item>
							<Logo>
								<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/footer-logo.png?v=1567064638" />
							</Logo>
							<TextContent>
								<Text>
									55 Gallaxy Enque
									<br />
									2568 steet, 23568 NY
								</Text>
								<Text>
									<b>Phone:</b>
									(440) 023451212
								</Text>
								<Text>
									<b>Email:</b>
									<TextLink href="mailto:mongtamquoc2015@gmail.com">
										<small>mongtamquoc2015@gmail.com</small>
									</TextLink>
								</Text>
							</TextContent>
							<SocialIcons>
								<Icon>
									<TextLink
										target="_blank"
										href="https://facebook.com/namisan2304"
									>
										<i class="fab fa-facebook-f"></i>
									</TextLink>
								</Icon>
								<Icon>
									<TextLink
										target="_blank"
										href="https://twitter.com/namisan2304"
									>
										<i class="fab fa-twitter"></i>
									</TextLink>
								</Icon>
								<Icon>
									<TextLink
										target="_blank"
										href="https://github.com/mongtamquoc2015"
									>
										<i class="fab fa-github"></i>
									</TextLink>
								</Icon>
								<Icon>
									<TextLink
										target="_blank"
										href="https://instargram/namisan2304"
									>
										<i class="fab fa-instagram"></i>
									</TextLink>
								</Icon>
							</SocialIcons>
						</Item>
						<Item>
							<Title>Information</Title>
							<Menu>
								<NavItem>
									<Links to="#/pages/about-us">
										About us
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/contact-us">
										Contacts us
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/career">
										Career
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/my-account">
										My Account
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/orders-returns">
										Orders and Returns
									</Links>
								</NavItem>
							</Menu>
						</Item>
						<Item>
							<Title>Quick shop</Title>
							<Menu>
								<NavItem>
									<Links to="#/pages/fashion">
										Fashion
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/men">
										Men
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/furniture">
										Furniture
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/home-decor">
										Home Decor
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/shoes">
										Shoes
									</Links>
								</NavItem>
							</Menu>
						</Item>
						<Item>
							<Title>CUSTOMER SERVICES</Title>
							<Menu>
								<NavItem>
									<Links to="#/pages/help-faqs">
										Help & FAQs
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/return-policy">
										Returns Policy
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/terms-conditions">
										Terms & Conditions
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/privacy-policy">
										Privacy Policy
									</Links>
								</NavItem>
								<NavItem>
									<Links to="#/pages/support-center">
										Support Center
									</Links>
								</NavItem>
							</Menu>
						</Item>
						<Item>
							<Title>Newsletter</Title>
							<Text>
								Enter your email to receive daily news and get 20% off coupon for all items.
							</Text>
							<Form>
								<TextField placeholder="Email address" />
								<Button>Subscribe</Button>
							</Form>
						</Item>
					</List>
				</Inner>
			</FooterTop>
			<FooterBottom>
				<Inner>
					<Text>© 2020 Avone. All Rights Reserved. Ecommerce Software by Shopify</Text>
					<Text>Designed by AdornThemes</Text>
				</Inner>
			</FooterBottom>
		</Container>
	)
}

export default Footer
