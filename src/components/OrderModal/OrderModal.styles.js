import styled from 'styled-components';

export const Background = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
`;

export const Wrapper = styled.div`
	background-color: #fff;
	width: 19.31rem;
	height: 16.31rem;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div``;

export const Title = styled.p`
	margin: 1.56rem auto 1.5rem;
	font-size: 1.25rem;
	height: 1.13rem;
`;

export const Account = styled.p`
	margin: 0 auto;
	font-size: 0.94rem;
	color: #0038ff;
	height: 1.13rem;
`;

export const Text = styled.p`
	margin: 1.38rem auto 2.13rem;
	font-size: 1.25rem;
	height: 2.63rem;
	line-height: 1.5rem;
`;

export const Button = styled.button`
	-webkit-appearance: none;
	width: 13rem;
	height: 2.88rem;
	background-color: var(--point);
	border: none;
	border-radius: 10px;
	font-size: 1.25rem;
	font-family: 'ChosunCentennial';
	color: #fff;
	margin: 0 auto;

	&:focus {
		outline: none;
	}
`;
