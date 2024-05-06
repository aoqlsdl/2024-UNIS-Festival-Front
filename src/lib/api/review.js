import ReviewService from './services/reviewservice';
import { http } from './http';

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
export const postReview = async reviewData => {
	try {
		const formData = new FormData();

		// JSON 데이터를 Blob으로 변환 후 FormData에 추가
		const json = JSON.stringify({
			title: reviewData.data.title,
			body: reviewData.data.body,
			rating: reviewData.data.rating,
			nickname: reviewData.data.nickname,
			phoneNumber: reviewData.data.phoneNumber,
			password: reviewData.data.password,
		});
		formData.append('data', new Blob([json], { type: 'application/json' }));

		// 파일이 배열로 존재한다면 모든 파일 추가
		reviewData.file.forEach(file => {
			formData.append('file', file);
		});

		const res = await http.post('/reviews/add', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		return res.data;
	} catch (err) {
		console.error('리뷰 등록 실패:', err);
		throw new Error('리뷰 등록에 실패했습니다.');
	}
};
