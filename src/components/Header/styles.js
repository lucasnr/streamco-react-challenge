import styled from 'styled-components';

export const Wrapper = styled.header`
	background-color: #0095ff;
	background-image: linear-gradient(to bottom, #0095ff, #006aff);
	box-shadow: 0px 3px 8px #000;
	color: #fff;
`;

export const Container = styled.div`
	margin: auto;
	max-width: 1200px;
	padding: 1rem;

	@media (min-width: 562px) {
		display: flex;
		justify-content: space-between;
	}
`;

export const Title = styled.h2`
	font-size: 2rem;
	margin: 0px;
	text-shadow: 0px 1px 3px #000;

	strong {
		text-transform: uppercase;
	}
`;

export const Links = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 1rem;

	@media (min-width: 562px) {
		margin-top: 0px;
	}

	a {
		align-items: center;
		color: inherit;
		display: flex;
		font-size: 0.875rem;
		margin-left: 0.5rem;
		padding: 0.5rem 1rem;
		text-decoration: none;

		&:nth-child(2) {
			background-color: #333;
			background-image: linear-gradient(to bottom, #444, #333);
		}
	}
`;
