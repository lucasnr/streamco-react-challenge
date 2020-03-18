import React from 'react';

import { Container, Cover, Link, LinkText, Title } from './styles';

export default function Card({ to, title, image }) {
	return (
		<Container>
			<Cover image={image}>
				{to && (
					<Link to={to}>
						<LinkText>{to}</LinkText>
					</Link>
				)}
			</Cover>
			<Title>{title}</Title>
		</Container>
	);
}
