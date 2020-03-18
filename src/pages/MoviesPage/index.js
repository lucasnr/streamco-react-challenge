import React from 'react';

import Container from '../../components/PageContainer';
import Cards from '../../components/Cards';
import Card from '../../components/Card';

const cards = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
	21
];

export default function MoviesPage() {
	return (
		<Container title="Popular movies">
			<Cards>
				{cards.map(index => (
					<Card title="Program title" key={index} />
				))}
			</Cards>
		</Container>
	);
}
