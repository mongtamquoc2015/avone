import React, { useEffect, useState } from 'react';
import { Footer, Header } from '../../components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Helmet } from 'react-helmet';
import { BreadcumbsUI, CollectionTemplateUI } from '../../layout/Collection';
import { v4 as uuidv4 } from 'uuid';
import { convertToSlug } from '../../helpers/convertToSlug';
import axios from 'axios';
import { useQuery } from 'react-query';

const CollectionPage = () => {
	const [collection, setCollection] = useState(null);
	const [collections, setCollections] = useState([]);
	const [filter, setFilter] = useState(null);
	const { collectionSlug } = useParams();

	const sizes = [
		{
			id: uuidv4(),
			name: 'M',
			slug: 'm'
		},
		{
			id: uuidv4(),
			name: 'S',
			slug: 's'
		},
		{
			id: uuidv4(),
			name: 'XS',
			slug: 'm'
		},
		{
			id: uuidv4(),
			name: 'L',
			slug: 'l'
		},
		{
			id: uuidv4(),
			name: 'XL',
			slug: 'xl'
		},
	];

	const prices = [
		{
			id: uuidv4(),
			range: [0, 100],
			slug: 'Under $100'
		},
		{
			id: uuidv4(),
			range: [100, 200],
			slug: '$100-$200'
		},
		{
			id: uuidv4(),
			range: [200, 300],
			slug: '$200-$300'
		},
		{
			id: uuidv4(),
			range: [300, 400],
			slug: '$300-$400'
		},
		{
			id: uuidv4(),
			range: [600, 800],
			slug: '$600-$800'
		},
	];

	const popularProducts = [
		{
			id: uuidv4(),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/1_063ca344-4c7a-49a3-9175-2460debdbd89_900x.jpg?v=1543404551',
			price: 71,
			name: 'Sandals Cross Strappy',
			slug: 'sandals-cross-strappy'
		},
		{
			id: uuidv4(),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/BLACK_900x.jpg?v=1556259137',
			price: 91,
			name: 'Backpack With Contrast Bow',
			slug: 'backpack-with-contrast-bow'
		},
	];

	const options = [
		{
			id: uuidv4(),
			name: 'Best Selling',
			slug: 'best-selling'
		},
		{
			id: uuidv4(),
			name: 'Alphabetically, A-Z',
			slug: 'title-accending'
		},
		{
			id: uuidv4(),
			name: 'Alphabetically, Z-A',
			slug: 'title-descending'
		},
		{
			id: uuidv4(),
			name: 'Price, low to hight',
			slug: 'price-accending'
		},
		{
			name: 'Price, high to low',
			slug: 'price-descending'
		},
		{
			id: uuidv4(),
			name: 'Date, new to old',
			slug: 'date-accending'
		},
		{
			id: uuidv4(),
			name: 'Date, new to old',
			slug: 'date-descending'
		},
	];

	const products = [
		{
			id: uuidv4(),
			name: 'High Neck Ribbed Knit',
			slug: convertToSlug('High Neck Ribbed Knit'),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/2_7369d5cc-4fcd-46e8-a015-85d2d49f4230_360x.jpg?v=1556198219',
			price: 88,
			star: 4
		},
		{
			id: uuidv4(),
			name: 'Innerbloom Puffer Jacket',
			slug: convertToSlug('Innerbloom Puffer Jacket'),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/4_b2f0e752-be97-45aa-8740-7f1e563ef245_360x.jpg?v=1588069269',
			price: 69,
			star: 5
		},
		{
			id: uuidv4(),
			name: 'Martha Knit Top',
			slug: convertToSlug('Martha Knit Top'),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/3_c4d303b9-5213-4f36-a95a-bb7406b3d010_360x.jpg?v=1559885946',
			price: 49,
			star: 4
		},
		{
			id: uuidv4(),
			name: 'Toledo Mules shoes',
			slug: convertToSlug('Toledo Mules shoes'),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/5_f203255a-3ab0-4fd4-a243-44fda38325b1_360x.jpg?v=1559884503',
			price: 28,
			star: 5
		},
		{
			id: uuidv4(),
			name: 'Button Up Top Black',
			slug: convertToSlug('Button Up Top Black'),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/2_9e9f51a6-1d27-4e12-b407-119e80626039_360x.jpg?v=1559886470',
			price: 117,
			star: 5
		},
		{
			id: uuidv4(),
			name: 'Sunset Sleep Scarf Top',
			slug: convertToSlug('Sunset Sleep Scarf Top'),
			imageSrc: 'https://cdn.shopify.com/s/files/1/0036/7306/3491/products/676_360x.jpg?v=1559887124',
			price: 62,
			star: 5
		},
	];

	const handleCheckbox = ({ target }) => {
		console.log('e.target', target);
	}

	const handleUserFilter = ({ target }) => {
		setFilter(target.value);
	}

	useEffect(() => {
		const currentCollection = collections.filter(item => item.slug === collectionSlug);
		setCollection(...currentCollection);
	}, [collectionSlug]);

	return (
		<>
			<Helmet>
				<title>{collection?.name}</title>
			</Helmet>
			<Header />
			<BreadcumbsUI title={collection?.name} />
			<CollectionTemplateUI
				collections={collections}
				sizes={sizes}
				prices={prices}
				popularProducts={popularProducts}
				collection={collection}
				options={options}
				products={products}
				filter={filter}
				handleUserFilter={handleUserFilter}
				isChecked={handleCheckbox}
			/>
			<Footer />
		</>
	)
}

export default CollectionPage;