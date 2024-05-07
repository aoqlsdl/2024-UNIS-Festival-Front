import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: fit-content;
`;

export const Event = styled.p`
	font-size: 1.25rem;
	margin: 0.75rem 0 0.94rem 0.94rem;
	text-align: left;
`;

export const Content = styled.div`
	width: 21.56rem;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	text-align: left;
	margin-left: 0.94rem;
`;

export const InputBox = styled.div`
	width: 100%;
	height: 4.5rem;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	justify-content: left;
	text-align: left;
	position: relative;

	&.textarea {
		align-items: initial;
		height: 7.38rem;
	}
`;

export const Label = styled.div`
	height: 1.13rem;
	margin-bottom: 0.31rem;
	line-height: 1.13rem;
`;

export const CharCount = styled.span`
	font-size: 0.69rem;
	color: #989898;
	position: absolute;
	right: 0;
	bottom: -0.38rem;
	font-family: 'AppleSDGothic';
`;

export const StarBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 21px;
`;

export const Input = styled.input`
	-webkit-appearance: none;
	width: calc(100% - 1rem);
	height: 1rem;
	padding: 0.5rem;
	margin-bottom: 0.13rem;
	align-items: center;
	border: 1px solid #dedede;
	border-radius: 8px;
	font-size: 0.75rem;
	font-family: 'ChosunCentennial';
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

	&.rating {
		width: 2rem;
		height: 21px;
		text-align: center;
		display: none;
	}

	&.image {
		border: none;
		border-radius: 0;
		box-shadow: none;
	}
`;

export const Textarea = styled.textarea`
	width: calc(100% - 1rem);
	height: 3.88rem;
	padding: 0.5rem;
	border: 1px solid #dedede;
	border-radius: 8px;
	font-size: 0.75rem;
	font-family: 'ChosunCentennial';
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`;

export const Submit = styled.button`
	-webkit-appearance: none;
	width: 100%;
	height: 2.5rem;
	margin: 1.19rem auto 0;
	border: none;
	border-radius: 5px;
	font-size: 1.25rem;
	font-family: 'ChosunCentennial';
	color: #fff;
	background-color: var(--point);
`;

export const File = styled.label`
	width: 5.75rem;
	height: 1.88rem;
	border: 1px solid #a6a6a6;
	border-radius: 5px;
	font-size: 0.75rem;
	font-family: 'AppleSDGothic';
	color: #a6a6a6;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	& > img {
		width: 0.88rem;
		height: 0.81rem;
	}

	& > span {
		width: 3rem;
		height: fit-content;
	}
`;

export const FileName = styled.span`
	width: 15rem;
	margin-left: 0.94rem;
	color: #989898;
	font-size: 0.69rem;
	font-family: 'AppleSDGothic';
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const FileBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
