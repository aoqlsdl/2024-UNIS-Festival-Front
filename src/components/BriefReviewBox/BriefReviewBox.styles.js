import styled from 'styled-components';

export const Container = styled.div`
	width: 21.56rem;
	height: 10.81rem;
	overflow-y: scroll;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	margin: 0 auto;

	&::-webkit-scrollbar {
		width: 0.25rem;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #a6a6a6;
		opacity: 0.7;
	}

	&::-webkit-scrollbar-track {
		width: 4px;
	}
`;

export const ReviewBox = styled.div`
	width: 18.5rem;
	height: 2.75rem;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const StarBox = styled.div`
	margin: 0.75rem 0;
`;

export const Contents = styled.div`
	width: 18.5rem;
	height: fit-content;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ReviewTitle = styled.p`
	width: 10rem;
	height: 1.56rem;
	margin: 0.75rem 0 0 0;
	font-size: 1.25rem;
	line-height: 1.13rem;
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ReviewDesc = styled.p`
	width: 100%;
	height: 1.19rem;
	font-size: 1rem;
	color: #a6a6a6;
	text-align: left;
	line-height: 1.13rem;
	margin: 0 0 0.13rem 0;
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
