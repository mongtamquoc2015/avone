import React from 'react'
import Header from '../../components/Header';
import { CarouselUI, JumbotronUI, SliderUI } from '../../layout/Home';

const HomePage = () => {
	// Example the data
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
	const carouselImages = [
		{
			id: 1,
			default: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/8_900x.jpg?v=1588069269',
			hover: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/4_b2f0e752-be97-45aa-8740-7f1e563ef245_900x.jpg?v=1588069269',
			isHot: true,
			name: 'Innerbloom Puffet Jacket',
			slug: 'innerbloom-puffet-jacket',
			price: '668.00',
			star: 5
		},
		{
			id: 2,
			default: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/2_b453e6ad-c5b6-4a87-acec-7d570d1e28e2_900x.jpg?v=1559885946',
			hover: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/3_c4d303b9-5213-4f36-a95a-bb7406b3d010_900x.jpg?v=1559885946',
			isHot: true,
			name: 'Matha Knit Top',
			slug: 'matha-knit-top',
			price: '419.00',
			star: 4
		},
		{
			id: 3,
			default: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/8_d74500ed-dd16-4711-b826-3c25f5651c8a_900x.jpg?v=1559886470',
			hover: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/2_9e9f51a6-1d27-4e12-b407-119e80626039_900x.jpg?v=1559886470',
			isHot: false,
			colors: [],
			name: 'Button Up Top Black',
			slug: 'button-up-top-black',
			price: '1,116.00',
			star: 5
		},
		{
			id: 4,
			default: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/Grey_720x.jpg?v=1556259137',
			hover: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/BLACK_540x.jpg?v=1556259137',
			isHot: false,
			name: 'Backpack With Constact Bow',
			slug: 'backpack-with-constract-bow',
			price: '98.00',
			star: 5
		}
	];
	return (
		<>
			<Header />
			<SliderUI sliders={sliders} />
			<JumbotronUI />
			<CarouselUI carouselImages={carouselImages} />
		</>
	)
}

export default HomePage;