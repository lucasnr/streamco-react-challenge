import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Wrapper = styled.footer`
	background-color: #1e1e1e;
	color: #ddd;
	font-size: 0.75rem;
	padding: 3rem 1rem;
`;

export const Container = styled.div`
	max-width: 1200px;
	margin: auto;
`;

export const Links = styled.div`
	display: grid;
	grid-gap: 1.25rem;

	@media (min-width: 768px) {
		display: flex;
	}
`;

export const Link = styled(RouterLink)`
	color: inherit;
	padding: 0px 0.75rem;
	text-decoration: none;

	@media (min-width: 768px) {
		& + a {
			border-left: 1px solid #ddd;
		}
	}
`;

export const Copyright = styled.span`
	color: #aaa;
	display: block;
	margin-top: 1rem;
	padding: 0px 0.75rem;
`;

export const Bottom = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media (min-width: 562px) {
		flex-direction: row;
	}
`;

export const SocialNetworks = styled.div`
	display: grid;
	grid-gap: 1.25rem;
	grid-template-columns: repeat(3, 26px);
	margin-top: 2.5rem;
`;

export const SocialNetwork = styled.a`
	display: flex;
	height: 26px;

	img {
		height: 100%;
		width: 100%;
	}
`;

export const Stores = styled.div`
	display: grid;
	grid-gap: 1.25rem;
	grid-template-columns: repeat(1, 200px);
	margin-top: 2.5rem;

	@media (min-width: 562px) {
		grid-template-columns: repeat(3, 120px);
	}
`;

export const Store = styled.a`
	display: flex;
	height: 100%;

	img {
		height: 100%;
		width: 100%;
	}
`;
