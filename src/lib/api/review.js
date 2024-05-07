import ReviewService from './services/reviewservice';
import axios from 'axios';

// 리뷰 전체 최신순
export const GetReviewByTime = async () => {
	try {
		const res = await ReviewService.getReviewByTime();
		return res.data;
	} catch (err) {
		console.error('최신순 리뷰 조회 실패:', err);
		throw new Error('최신순 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰 5개 최신순
export const GetBriefReviewByTime = async () => {
	try {
		const res = await ReviewService.getBriefReviewByTime();
		return res.data;
	} catch (err) {
		console.error('최신 5개 리뷰 조회 실패:', err);
		throw new Error('최신 5개 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰 전체 인기순
export const getReviewByLike = async () => {
	try {
		const res = await ReviewService.getReviewByLike();
		return res.data;
	} catch (err) {
		console.error('인기순 리뷰 조회 실패:', err);
		throw new Error('인기순 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰 5개 인기순
export const getBriefReviewByLike = async () => {
	try {
		const res = await ReviewService.getBriefReviewByLike();
		return res.data;
	} catch (err) {
		console.error('인기순 리뷰 조회 실패:', err);
		throw new Error('인기순 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰등록
export const postReview = async (reviewData, files) => {
	try {
		const formData = new FormData();

		// Review 데이터를 JSON 문자열로 변환하고 블롭으로 만들어 FormData에 추가
		const jsonReviewData = JSON.stringify(reviewData);
		const blobReviewData = new Blob([jsonReviewData], {
			type: 'application/json',
		});
		formData.append('data', blobReviewData);

		// 파일(들)을 FormData에 추가
		files.forEach(file => {
			formData.append('file', file);
		});

		// Axios를 통한 POST 요청
		const { data } = await axios.post(
			`${import.meta.env.VITE_APP_API_URL}reviews/add`,
			formData,
			{ headers: { 'Content-Type': 'multipart/form-data' } }
		);

		console.log(data);
		return data;
	} catch (err) {
		console.error('리뷰 등록 실패:', err);
		throw new Error('리뷰 등록에 실패했습니다.');
	}
};
