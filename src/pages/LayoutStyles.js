import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	// height: 100vh;
	min-width: 23.438rem;
	max-width: 49.125rem;
	text-align: center;
`;
export const Wrapper = styled.div``;
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
