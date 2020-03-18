import React, { useState, useEffect } from 'react';

import Container from '../../components/PageContainer';
import Cards from '../../components/Cards';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

export default function SeriesPage() {
	const [series, setSeries] = useState();
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
		)
			.then(response => response.json())
			.then(({ entries }) => {
				const result = entries
					.filter(
						entry => entry.programType === 'series' && entry.releaseYear >= 2010
					)
					.sort((a, b) =>
						a.title.localeCompare(b.title, 'en', { numeric: true })
					)
					.slice(0, 21);

				setSeries(result);
			});
	}, []);

	return (
		<Container title="Popular series">
			{series ? (
				<Cards>
					{series.map((series, index) => (
						<Card
							key={`series-${index}`}
							title={series.title}
							image={series.images['Poster Art'].url}
						/>
					))}
				</Cards>
			) : (
				<Loading />
			)}
		</Container>
	);
}
