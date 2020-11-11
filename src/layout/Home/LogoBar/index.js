import React from 'react'
import { Container, List, Link, Item, Image } from './LogoBarStyles'

const LogoBarUI = () => {
	return (
		<Container>
			<List>
				<Item>
					<Link>
						<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/5_0c0397a5-2ba0-4637-a9f6-86e68b3d6289_200x150.png?v=1559278585" />
					</Link>
				</Item>
				<Item>
					<Link>
						<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/1_6bea7f1e-dc0a-446d-9714-c15ac0eaab06_200x150.png?v=1559278554" />
					</Link>
				</Item>
				<Item>
					<Link>
						<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/4_200x150.png?v=1559278578" />
					</Link>
				</Item>
				<Item>
					<Link>
						<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/3_200x150.png?v=1559278569" />
					</Link>
				</Item>
				<Item>
					<Link>
						<Image src="https://cdn.shopify.com/s/files/1/0036/7306/3491/files/2_200x150.png?v=1559278562" />
					</Link>
				</Item>
			</List>
		</Container>
	)
}

export default LogoBarUI
