import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {
	Container, ImgContainer, Item, List, Image, Details, Inner, Title, Button
} from './BannerStyles'

const Banner = () => {
	return (
		<Container>
			<List>
				<Item>
					<Link>
						<ImgContainer>
							<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/best-collections_700x.jpg?v=1564397576" />
							<Details>
								<Inner>
									<Title>Find the best collection around the world</Title>
									<Button>Shop now</Button>
								</Inner>
							</Details>
						</ImgContainer>
					</Link>
				</Item>
				<Item>
					<Link>
						<ImgContainer>
							<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/awesome-tops_700x.jpg?v=1564397590" />
							<Details>
								<Inner>
									<Title>Find the best collection around the world</Title>
									<Button>Shop now</Button>
								</Inner>
							</Details>
						</ImgContainer>
					</Link>
				</Item>
			</List>
		</Container>
	)
}

export default Banner
