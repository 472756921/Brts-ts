import { lazy } from 'react';
import Home from '../page/home';

const routes = [
	{
		'path': '/',
		'component': Home
	},
	{
		'path': '/login',
		'component': lazy(() => import('../page/login'))
	}
];

export default routes;
