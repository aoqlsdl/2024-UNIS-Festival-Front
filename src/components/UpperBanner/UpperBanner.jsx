import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: 300px;
	background-color: #dedede;
`;

const UpperBanner = () => {
    useEffect(() => {
        const imageElement = document.getElementById('image'); // 이미지 요소 가져오기
        const imageSources = [
            // 이미지 소스 배열
            '/dist/imgs/map.webp',
            '/dist/imgs/menu.png'
        ];
        let currentIndex = 0; // 현재 이미지 인덱스

        // 이미지 변경 함수
        const changeImage = () => {
            // 현재 인덱스에 따라 다음 이미지로 변경
            currentIndex = (currentIndex + 1) % imageSources.length;
            imageElement.src = imageSources[currentIndex];
        }

        // 초기 이미지 변경
        changeImage();

        // 4초마다 이미지 변경
        const interval = setInterval(changeImage, 4000);

        // 컴포넌트가 언마운트 될 때 interval 제거
        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <img id="image" src="/dist/imgs/map.webp" alt="UNIS POSTER_Upper" height={300} width={800} />
        </Container>
    );
};

export default UpperBanner;
