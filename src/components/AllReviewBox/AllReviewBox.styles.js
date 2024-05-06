import styled from 'styled-components';

export const Container = styled.div`
	width: 21.56rem;
	height: 30.44rem;
	overflow-y: scroll;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	margin: 0 auto;
`;

export const ReviewBox = styled.div`
	width: 19.69rem;
	height: 8.94rem;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const Contents = styled.div`
	width: 18.5rem;
	height: fit-content;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #d9d9d9;

	&:last-child {
		border-bottom: none;
	}
`;

export const ReviewTitle = styled.p`
	margin: 0.44rem 0 0 0;
	font-size: 1.25rem;
	line-height: 1.13rem;
	text-align: left;
`;

export const ReviewDesc = styled.p`
	width: calc(100% - 2rem);
	height: 1.19rem;
	font-size: 1rem;
	color: #a6a6a6;
	text-align: left;
	line-height: 1.13rem;
	margin: 0 0 1.25rem 0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Reviewer = styled.span`
	font-size: 1rem;
	color: var(--point);
	text-align: left;
	margin: 0 0 1.06rem 0;
`;

export const Review = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: left;
`;

export const ReviewImg = styled.img`
	width: 6.56rem;
	height: 6.56rem;
`;
