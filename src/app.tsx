import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Routes from './route';

// if (module.hot) {
// 	module.hot.accept('./page/home/index.tsx', () => {
// 		console.log('Accepting the updated printMe module!');
// 	});
// }

render(
	<BrowserRouter>
		<Suspense fallback={<div>loading...</div>}>
			<Switch>
				{Routes?.map((it, i) => (
					<Route component={it.component} key={i} path={it.path} />
				))}
			</Switch>
		</Suspense>
	</BrowserRouter>,
	document.getElementById('root')
);
