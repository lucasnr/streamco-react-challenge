import styled from 'styled-components';

const Loading = styled.span`
	font-size: 1rem;
	display: block;
	margin: 1.5rem 2rem;
`;

Loading.defaultProps = {
	children: 'Loading...'
};

export default Loading;
