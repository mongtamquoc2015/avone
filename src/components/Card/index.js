import React from 'react'
import {
	Container, ImageContainer, Link, Image,
	ProductButtons, Button, Icon, Details,
	Title, Meta, Price, Badge, Review, StarIcon
} from './CardStyles'

const Card = ({ imageSrc, url, collection, slug, name, price }) => {
	return (
		<Container>
			<ImageContainer>
				<Link to={url}>
					<Image src={imageSrc} />
				</Link>
				<ProductButtons>
					<Button title="Add to wishlist">
						<Link to="/pages/wishlist">
							<Icon>
								<i class="far fa-heart"></i>
							</Icon>
						</Link>
					</Button>
					<Button title="Add to cart">
						<Link to="/pages/wishlist">
							<Icon>
								<i class="fas fa-shopping-cart"></i>
							</Icon>
						</Link>
					</Button>
					<Button title="Quick View">
						<Link to={`collections/${collection}/products/${slug}`}>
							<Icon>
								<i class="fas fa-search"></i>
							</Icon>
						</Link>
					</Button>
				</ProductButtons>
			</ImageContainer>
			<Details>
				<Title to={`/collections/${collection}/products/${slug}`}>{name}</Title>
				<Meta>
					<Price>${price}</Price>
				</Meta>
				<Review>
					<Badge>
						<StarIcon>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
						</StarIcon>
					</Badge>
				</Review>
			</Details>
		</Container>
	)
}

export default Card;