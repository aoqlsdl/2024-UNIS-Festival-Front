import React, { useEffect, useState } from 'react';
import * as s from './LowerBannerStyles';

const LowerBanner = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const imageSources = [
		'/public/imgs/lowBanner1.webp',
		'/public/imgs/lowBanner2.webp',
		'/public/imgs/lowBanner3.webp',
		'/public/imgs/lowBanner4.webp',
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % imageSources.length);
		}, 3000); // 이미지를 3초마다 변경

		return () => clearInterval(interval);
	}, []);

	return (
		<s.Container>
			{imageSources.map((src, index) => (
				<s.Img
					key={index}
					src={src}
					alt={`UNIS POSTER_${index}`}
					style={{ transform: `translateX(-${currentIndex * 100}%)` }}
				/>
			))}
		</s.Container>
	);
};

export default LowerBanner;
