import React from 'react'
import HomeUI from '../../layout/Home'

const HomePage = () => {
	const sliders = [
		{
			src: "https://cdn.shopify.com/s/files/1/0036/7306/3491/files/dome1-bnr2_1512x.jpg?v=1564398860",
			title: "The Powerful Theme You can Trust",
			subTitle: "High Performance Delivered",
			position: "right"
		},
		{
			src: "https://cdn.shopify.com/s/files/1/0036/7306/3491/files/dome1-bnr1_1512x.jpg?v=1564398860",
			title: "Start Selling Online Successfully",
			subTitle: "Creative,Flexible and Hight Performance shopify theme!",
			position: "left"
		}
	];
	return (
		<>
			<HomeUI sliders={sliders} />
		</>
	)
}

export default HomePage;