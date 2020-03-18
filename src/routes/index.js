import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import SeriesPage from '../pages/SeriesPage';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/movies" component={MoviesPage} />
			<Route path="/series" component={SeriesPage} />
		</Switch>
	);
}
