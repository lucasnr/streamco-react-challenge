import React, { useState, useEffect } from 'react';

import Container from '../../components/PageContainer';
import Cards from '../../components/Cards';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

export default function MoviesPage() {
	const [movies, setMovies] = useState();
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
		)
			.then(response => response.json())
			.then(({ entries }) => {
				const result = entries
					.filter(
						entry => entry.programType === 'movie' && entry.releaseYear >= 2010
					)
					.sort((a, b) =>
						a.title.localeCompare(b.title, 'en', { numeric: true })
					)
					.slice(0, 21);

				setMovies(result);
			});
	}, []);

	return (
		<Container title="Popular movies">
			{movies ? (
				<Cards>
					{movies.map((movie, index) => (
						<Card
							key={`movie-${index}`}
							title={movie.title}
							image={movie.images['Poster Art'].url}
						/>
					))}
				</Cards>
			) : (
				<Loading />
			)}
		</Container>
	);
}
