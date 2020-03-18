import styled from 'styled-components';

export const Container = styled.section`
	margin: auto;
	max-width: 1200px;
	width: 100%;
`;

export const Content = styled.div`
	display: grid;
	grid-column-gap: 0.75rem;
	grid-row-gap: 1.5rem;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	padding: 2rem 1rem;
`;
