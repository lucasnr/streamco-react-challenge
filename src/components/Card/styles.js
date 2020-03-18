import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import background from '../../assets/img/placeholder.png';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Cover = styled.div`
	background-color: #1e1e1e;
	background-image: ${props =>
		props.image ? `url(${props.image})` : `url(${background})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: ${props => (props.image ? 'cover' : 'auto')};
	height: 244px;
	width: 100%;
`;

export const Link = styled(RouterLink)`
	align-items: center;
	color: inherit;
	display: flex;
	height: 100%;
	justify-content: center;
	text-decoration: none;
`;

export const LinkText = styled.h6`
	color: #fff;
	font-size: 2.25rem;
	font-weight: bold;
	margin: 0px;
	text-transform: uppercase;
`;

export const Title = styled.h4`
	font-size: 1rem;
	font-weight: normal;
	margin: 0.5rem 0px 0px 0px;
	text-transform: capitalize;
`;
