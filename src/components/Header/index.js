import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Container, Title, Links } from './styles';

export default function Header() {
	return (
		<Wrapper>
			<Container>
				<Title>
					<strong>Demo</strong> Streaming
				</Title>
				<Links>
					<Link to="/">Log in</Link>
					<Link to="/">Start your free trial</Link>
				</Links>
			</Container>
		</Wrapper>
	);
}
