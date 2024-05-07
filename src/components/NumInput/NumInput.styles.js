import styled from 'styled-components';

export const Wrapper = styled.div`
	display: 'flex';
	alignitems: 'center';
	position: absolute;
	right: 0;
	bottom: 0.81rem;
`;

export const Button = styled.button`
	-webkit-appearance: none;
	border: none;
	background-color: #fff;
	font-family: 'ChosunCentennial';
	font-size: 0.81rem;
`;

export const Input = styled.input`
	-webkit-appearance: none;
	width: 2.25rem;
	height: 1.31rem;
	margin: 0 0.38rem;
	border: none;
	border-radius: 5px;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	font-family: 'AppleSDGothicNeoR', 'AppleSDGothicNeoM';
	text-align: center;

	&:focus {
		outline: 1px solid var(--point);
	}
`;
