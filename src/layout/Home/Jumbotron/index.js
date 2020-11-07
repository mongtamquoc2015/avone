import React from 'react'
import {
	Button, Container, Detail,
	List, Image, Title, Text,
	Item, Link
} from './JumbotronStyles'


const JumbotronUI = () => {
	return (
		<Container>
			<List>
				<Item>
					<Image>
						<img alt="woments-top" src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/womens-top_720x.jpg?v=1568868787" />
					</Image>
					<Detail>
						<Title>Women Tops</Title>
						<Text>From world's top designer</Text>
						<Button>
							<Link to="/collections/women">Discover Now</Link>
						</Button>
					</Detail>
				</Item>
				<Item>
					<Image>
						<img alt="men-shoes" src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/men-clothing_720x.jpg?v=1568869291" />
					</Image>
					<Detail>
						<Title>Men Shoes</Title>
						<Text>Up to 70% off on selected item</Text>
						<Button>
							<Link to="/collections/men-shoes">Discover Now</Link>
						</Button>
					</Detail>
				</Item>
				<Item>
					<Image>
						<img alt="accesories" src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/accesories_720x.jpg?v=1568869291" />
					</Image>
					<Detail>
						<Title>Accesories</Title>
						<Text>Add fishing touch to your outfit</Text>
						<Button>
							<Link to="/collections/accesories">Discover Now</Link>
						</Button>
					</Detail>
				</Item>
				<Item>
					<Image>
						<img alt="denim" src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/denim_9fbab35d-066b-4f9e-accb-96416f6594fd_720x.jpg?v=1568869105" />
					</Image>
					<Detail>
						<Title>Denim</Title>
						<Text>Find you perfect outfit</Text>
						<Button>
							<Link to="/collections/denim">Discover Now</Link>
						</Button>
					</Detail>
				</Item>
			</List>
		</Container>
	)
}

export default JumbotronUI
