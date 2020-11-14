import React from 'react';
import {
	BadgeIcon, Button,
	Card, Container,
	Details, DetailsPrice, DetailsTitle, GridContainer, GridItem, Icon,
	Image, Label, Link,
	Price, ProductButtons,
	ProductLabel,
	ProductReview, SlickSlider,
	SubTitle, Title,
	ToolTipLabel, TopContent
} from './CarouselStyles';

const CarouselUI = ({ carouselImages }) => {
	return (
		<Container>
			<TopContent>
				<Title>
					<b>New Arrivals</b>
				</Title>
				<SubTitle>Shop out new arrivals from established brands</SubTitle>
			</TopContent>
			<SlickSlider>
				<GridContainer>
					{
						carouselImages.map(item => (
							<GridItem key={item.id}>
								<Card>
									<ProductLabel>
										{
											item?.isHot &&
											<Label>Hot</Label>
										}
									</ProductLabel>
									<Link {...item} to="#product-detail">
										<Image
											defaultSrc={item?.default}
											hoverSrc={item?.hover}
										/>
									</Link>
									<ProductButtons>
										<Button title="Add to Wishlist">
											<Icon>
												<Link to="#/pages/wishlist">
													<i className="far fa-heart" />
												</Link>
											</Icon>
											<ToolTipLabel>Add to Wishlist</ToolTipLabel>
										</Button>
										<Button title="Quick shop">
											<Icon>
												<Link to="#/pages/wishlist">
													<i className="fas fa-search" />
												</Link>
											</Icon>
										</Button>
										<Button title="Quick view">
											<Icon>
												<Link to="#/pages/cart">
													<i className="fas fa-shopping-cart" />
												</Link>
											</Icon>
										</Button>
									</ProductButtons>
								</Card>
								<Details>
									<DetailsTitle to={`#/collections/women/products/${item?.slug}`}>{item?.name}</DetailsTitle>
									<DetailsPrice>
										<Price>${item?.price}</Price>
									</DetailsPrice>
									<ProductReview>
										<Icon>
											<BadgeIcon>
												{
													[...Array(item?.star)].map((_, index) => (
														<i key={index} className="fas fa-star"></i>
													))
												}
											</BadgeIcon>
										</Icon>
									</ProductReview>
								</Details>
							</GridItem>
						))
					}
				</GridContainer>
			</SlickSlider>
		</Container>
	)
}

export default CarouselUI;