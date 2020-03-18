import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';

import './assets/css/normalize.css';

function App() {
	return (
		<Router>
			<Header />
			<Routes />
			<Footer />
			<GlobalStyle />
		</Router>
	);
}

export default App;
