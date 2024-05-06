import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: fit-content;
`;

export const Content = styled.div``;

export const InputBox = styled.div`
	width: 90vw;
	height: fit-content;
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	justify-content: space-between;
	align-items: center;

	&.textarea {
		align-items: initial;
	}
`;

export const Label = styled.div``;

export const Input = styled.input`
	-webkit-appearance: none;
	width: 75%;
	height: 2rem;
	// margin-left: 0.5rem;
	border: 1px solid #dedede;
	border-radius: 8px;
	font-size: 1.25rem;
`;

export const Textarea = styled.textarea`
	width: 75%;
	height: 5rem;
	border: 1px solid #dedede;
	border-radius: 8px;
	font-size: 1.25rem;
`;

export const Submit = styled.button`
	-webkit-appearance: none;
	width: 100%;
`;
