import React from 'react';

import Container from '../../components/PageContainer';
import Cards from '../../components/Cards';
import Card from '../../components/Card';

export default function HomePage() {
	return (
		<Container title="Popular titles" noMargin>
			<Cards>
				<Card to="series" title="Popular series" />
				<Card to="movies" title="Popular movies" />
			</Cards>
		</Container>
	);
}
