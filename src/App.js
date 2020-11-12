import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTERS from './routers';
import { Helmet } from 'react-helmet';

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
						</Route>
					))
				}
			</Switch>
		</Router>
	);
}

export default App;