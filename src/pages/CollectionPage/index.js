import React, { useEffect, useState } from 'react';
import { Footer, Header } from '../../components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Breadcumbs from '../../layout/Collection/Breadcumbs';
import { Helmet } from 'react-helmet';

const CollectionPage = () => {
	const [title, setTitle] = useState('');
	const { collectionSlug } = useParams();

	useEffect(() => {
		switch (collectionSlug) {
			case 'men-shoes':
				setTitle('Men Shoes - Avone');
				break;
			case 'women':
				setTitle('Women - Avone');
				break;
			case 'accessories':
				setTitle('Accessories - Avone');
				break;
			case 'denim':
				setTitle('Denim - Avone');
				break;
			default:
				setTitle('Avone');
				break;
		}
	}, [collectionSlug, title])
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header />
			<Breadcumbs title={title} />
			<Footer />
		</>
	)
}

export default CollectionPage;