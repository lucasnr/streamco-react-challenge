import React from 'react';

import { Wrapper, Container, Title } from './styles';

export default function PageTitle({ text }) {
	return (
		<Wrapper>
			<Container>
				<Title>{text}</Title>
			</Container>
		</Wrapper>
	);
}
