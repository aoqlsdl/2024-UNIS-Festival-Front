import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	width: 21.56rem;
	height: 8.06rem;
	display: flex; // 이미지들을 가로로 배열
	overflow: hidden; // 슬라이드 외의 이미지 숨김
`;

export const Img = styled.img`
	flex: 0 0 100%; // 각 이미지가 컨테이너의 100% 너비를 차지
	width: 100%;
	height: 100%;
	transition: transform 0.5s ease-in-out;
	margin: 0 auto;
`;
