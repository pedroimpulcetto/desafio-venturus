import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Users from './pages/Users/index';
import New from './pages/New/index';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/users" component={Users} />
				<Route path="/new" component={New} />
			</Switch>
		</BrowserRouter>
	);
}
