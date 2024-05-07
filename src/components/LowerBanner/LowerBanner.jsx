import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	min-width: 23.438rem;
	max-width: 49.125rem;
	height: 300px;
	background-color: #dedede;
`;

const LowerBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageSources = [
        '/public/imgs/lowBanner1.webp',
        '/public/imgs/lowBanner2.webp',
		'/public/imgs/lowBanner3.webp',
		'/public/imgs/lowBanner4.webp'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % imageSources.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <img id="image" src={imageSources[currentIndex]} alt="UNIS POSTER_Upper" height={300} width={800} />
        </Container>
    );
};

export default LowerBanner;
