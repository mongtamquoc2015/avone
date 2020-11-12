import CollectionPage from '../pages/CollectionPage';
import HomePage from '../pages/HomePage';
import { v4 as uuidv4 } from 'uuid';

export default [
	{
		id: uuidv4(),
		path: '/',
		component: HomePage,
		title: 'Avone'
	},
	{
		id: uuidv4(),
		path: '/collections/:collectionSlug',
		component: CollectionPage
	}
];