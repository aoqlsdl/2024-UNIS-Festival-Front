import styled from 'styled-components';

export const Container = styled.div`
	width: 21.56rem;
	height: 30.44rem;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	margin: 0 auto;
	overflow-y: scroll;

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
	width: 19.69rem;
	height: 8.94rem;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const StarBox = styled.div`
	margin-top: 1.13rem;
	margin-bottom: 0.44rem;
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
	width: 12rem;
	margin: 0.44rem 0 0 0;
	font-size: 1.25rem;
	line-height: 1.13rem;
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ReviewDesc = styled.p`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2; // 표시할 줄 수
	width: 12rem;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 12rem;
	height: 1.19rem;
	font-size: 1rem;
	color: #a6a6a6;
	text-align: left;
	line-height: 1.13rem;
	margin: 0 0 1.25rem 0;
	height: auto;
	// word-wrap: break-word;
	// white-space: nowrap;
	// overflow: hidden;
	// text-overflow: ellipsis;
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

export const EmptyMessage = styled.p`
	width: 100%;
	height: 100%;
	text-align: center;
	margin: 14rem auto 0;
`;
