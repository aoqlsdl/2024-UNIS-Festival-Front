import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	min-width: 23.438rem;
	max-width: 49.125rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
`;

export const Text = styled.p`
	margin: 0 auto;
	font-size: 2rem;
`;

export const Desc = styled.p`
	margin: 0 auto;
	font-size: 1rem;
	color: #cdcdcd;
`;

export const Button = styled.button`
	width: 21.56rem;
	height: 2.5rem;
	background-color: var(--point);
	margin: 2rem auto 0;
	border: none;
	border-radius: 5px;
	color: #fff;
`;
