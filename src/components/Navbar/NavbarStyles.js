import styled from 'styled-components';

export const Wrapper = styled.nav`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: 3.88rem;
	display: flex;
	font-size: 1.25rem;
	align-items: center;
	background-color: #fff;
	position: fixed;
	top: 0;
	margin: 0 auto;
	z-index: 100;
`;

export const Content = styled.div`
	width: 21.56rem;
	height: 3.88rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 auto;
	border-bottom: 1px solid #dedede;
`;

export const Arrow = styled.img`
	width: 1.38rem;
	height: 1.13rem;
	margin-right: 0.5rem;
`;

export const Title = styled.span`
	heihgt: 2.13rem;
`;
