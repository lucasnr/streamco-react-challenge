import React from 'react';

import { Container, Content } from './styles';

export default function Cards({ children }) {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
}
