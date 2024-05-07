import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 6.38rem;
	height: 7.44rem;
	background-image: url('/imgs/button-bg.webp');
	background-size: cover;
	background-position: center center;
	position: relative;
	border-radius: 10px;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.p`
	width: 3.44rem;
	height: 3.13rem;
	margin: 0;
	position: absolute;
	top: 1.13rem;
	right: 0.88rem;
	font-size: 1.25rem;
	text-align: right;
	color: #000;
	line-height: 1.75rem;
`;

export const Desc = styled.p`
	width: 4.38rem;
	height: 1.88rem;
	margin: 0;
	font-size: 0.75rem;
	position: absolute;
	bottom: 0.81rem;
	left: 0.75rem;
	text-align: left;
	color: #000;
	line-height: 1rem;
	white-space: pre-wrap;
`;
