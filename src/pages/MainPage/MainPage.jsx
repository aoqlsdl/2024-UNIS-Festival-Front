import UpperBanner from '../../components/UpperBanner/UpperBanner';
import LowerBanner from '../../components/LowerBanner/LowerBanner';
import * as s from './MainStyles';
import MainButton from '../../components/MainButton/MainButton';
import { useEffect, useState } from 'react';
import { GetBriefReviewByTime } from '../../lib/api/review';

const MainPage = () => {
	const [reviews, setReviews] = useState([]);

	// useEffect(() => {
	// 	GetBriefReviewByTime().then(data => {
	// 		console.log(data);
	// 	});
	// }, []);
	return (
		<>
			<UpperBanner />
			<s.Contents>
				<s.Title>환영하오...</s.Title>
				<MainButton title={'예약 주문'} desc={'기다리지 말고 픽업하세요!'} />
				<MainButton title={'이벤트'} desc={'참여만 해도 반값할인'} />
				<MainButton title={'오시는 길'} desc={'부스 위치 안내도'} />
			</s.Contents>
			<s.Contents>
				<s.Title>벗들의 생생한 후기</s.Title>
			</s.Contents>
			<s.Contents>
				<s.Title>어젯밤 구해주신 홍보물입니다</s.Title>
			</s.Contents>
			<LowerBanner />
		</>
	);
};

export default MainPage;
