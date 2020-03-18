import React, { useEffect } from 'react';

import Title from './Title';
import { Container } from './styles';

export default function PageContainer({ title, children }) {
	useEffect(() => {
		document.title = `DEMO Streaming - ${title}`;
	}, [title]);

	return (
		<Container>
			<Title text={title} />
			{children}
		</Container>
	);
}
