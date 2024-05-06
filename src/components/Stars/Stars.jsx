import React from 'react';
import * as s from './Stars.styles';

const Stars = ({ rating, setRating }) => {
	const totalStars = 5;
	const starWidth = 23; // 별의 폭 설정
	const starHeight = 21; // 별의 높이 설정

	// 별 클릭 이벤트 핸들러
	const handleClick = index => {
		const newRating = index + 1;
		setRating(newRating);
	};

	// SVG 별 생성
	const renderStar = index => {
		const isFull = index < rating;

		const fillColor = isFull ? '#DEC67A' : '#A6A6A6';

		return (
			<svg
				width={`${starWidth}px`}
				height={`${starHeight}px`}
				viewBox="0 0 23 21"
				onClick={() => handleClick(index)}
				key={index}
				style={{ cursor: 'pointer' }} // 커서 스타일 추가
			>
				<path
					d="M11.2158 0.839617C11.3078 0.56785 11.6922 0.567851 11.7842 0.839618L14.1458 7.81746C14.187 7.93929 14.3013 8.02129 14.43 8.02129H22.0455C22.3391 8.02129 22.4579 8.3994 22.2171 8.56734L16.0774 12.8498C15.9679 12.9262 15.922 13.0657 15.9648 13.1921L18.3149 20.1359C18.4077 20.4101 18.0966 20.6437 17.8591 20.4781L11.6716 16.1623C11.5685 16.0904 11.4315 16.0904 11.3284 16.1623L5.14087 20.4781C4.90339 20.6437 4.59226 20.4101 4.68508 20.1359L7.03518 13.1921C7.07796 13.0657 7.0321 12.9262 6.92264 12.8498L0.782876 8.56734C0.542091 8.3994 0.66093 8.02129 0.954501 8.02129H8.57004C8.69866 8.02129 8.81297 7.9393 8.8542 7.81746L11.2158 0.839617Z"
					fill={fillColor}
				/>
			</svg>
		);
	};

	return (
		<s.Star style={{}}>
			{Array.from({ length: totalStars }, (_, index) => renderStar(index))}
		</s.Star>
	);
};

export default Stars;
