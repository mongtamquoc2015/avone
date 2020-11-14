import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SiteScroll from './components/SiteScroll';
import ROUTERS from './routers';

function App() {
	return (
		<Router>
			<Switch>
				{
					ROUTERS.map(router => (
						<Route
							key={router.id}
							exact
							path={router.path}
						>
							<Helmet>
								<title>{router.title}</title>
							</Helmet>
							<router.component />
							<SiteScroll />
						</Route>
					))
				}
			</Switch>
		</Router>
	);
}

export default App;