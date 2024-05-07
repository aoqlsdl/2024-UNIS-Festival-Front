import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: fit-content;
	min-width: 23.438rem;
	max-width: 49.125rem;
	text-align: center;
	margin: 0 auto;

	&.nav {
		margin-top: 2rem;
	}

	&.auth {
		font-family: 'AppleSDGothicNeoM';
	}
`;
export const Wrapper = styled.div`
	margin-top: 2.81rem;
	&.nav {
		margin-top: 7rem;
	}
`;
export const InputWrapper = styled.div`
	width: 20rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
`;
export const Input = styled.input`
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	width: 100%;
	height: 3rem;
	border: 1px solid #dedede;
	border-radius: 8px;
	font-family: 'AppleSDGothicNeoR', 'AppleSDGothicNeoM';

	&:focus {
		outline: none;
	}
`;
export const Button = styled.button`
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	width: 100%;
	height: 3rem;
	margin-top: 1rem;
	border: 1px solid #dedede;
	border-radius: 8px;
	background-color: blue;
	color: #fff;
`;

export const InfoBox = styled.div`
	width: 20rem;
	padding: 1rem;
	margin: 0 0 1rem 1rem;
	background-color: var(--light-gray);
	font-family: 'AppleSDGothicNeoM', sans-serif;
`;

export const Info = styled.li`
	font-size: 0.65rem;
	text-align: left;
	margin: 0;
`;
