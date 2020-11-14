import React from 'react'
import { Container, Icon, Inner, Item, List, SubTitle, TextContent, Title } from './StoreInfoStyles'

const StoreInfoUI = () => {
	return (
		<Container>
			<Inner>
				<List>
					<Item>
						<Icon>
							<i className="fas fa-truck"></i>
						</Icon>
						<TextContent>
							<Title>Free Shipping & Return</Title>
							<SubTitle>Free shipping on all US orders</SubTitle>
						</TextContent>
					</Item>
					<Item>
						<Icon>
							<i className="fas fa-hand-holding-usd"></i>
						</Icon>
						<TextContent>
							<Title>Money Gaugntee</Title>
							<SubTitle>30 days money back guarantee</SubTitle>
						</TextContent>
					</Item>
					<Item>
						<Icon>
							<i className="fas fa-mobile-alt"></i>
						</Icon>
						<TextContent>
							<Title>Online support</Title>
							<SubTitle>Free shipping on all US orders</SubTitle>
						</TextContent>
					</Item>
				</List>
			</Inner>
		</Container>
	)
}

export default StoreInfoUI
