import { useEffect } from 'react';
import * as s from './ImgPopUpStyles';

const ImgPopUp = ({ isOpen, onClose }) => {
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		if (isOpen) {
			document.body.style.overflow = 'hidden'; // 모달이 열리면 스크롤 방지
		} else {
			document.body.style.overflow = originalStyle; // 모달이 닫히면 스크롤 재개
		}

		return () => {
			document.body.style.overflow = originalStyle;
		};
	}, [isOpen]);
	return (
		<s.Background onClick={onClose}>
			<s.Img
				src="/imgs/map.webp"
				onClick={e => e.stopPropagation()} // 이미지 클릭 시 이벤트 버블링 방지
			/>
		</s.Background>
	);
};

export default ImgPopUp;
