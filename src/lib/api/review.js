import ReviewService from './services/reviewservice';

// 리뷰 전체 최신순
export const GetReviewByTime = async () => {
	try {
		const res = ReviewService.getReviewByTime();
		return res.data;
	} catch (err) {
		console.error('최신순 리뷰 조회 실패:', err);
		throw new Error('최신순 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰 5개 최신순
export const GetBriefReviewByTime = async () => {
	try {
		const res = ReviewService.getBriefReviewByTime();
		return res.data;
	} catch (err) {
		console.error('최신 5개 리뷰 조회 실패:', err);
		throw new Error('최신 5개 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰 전체 인기순
export const getReviewByLike = async () => {
	try {
		const res = ReviewService.getReviewByLike();
		return res.data;
	} catch (err) {
		console.error('인기순 리뷰 조회 실패:', err);
		throw new Error('인기순 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰 5개 인기순
export const getBriefReviewByLike = async () => {
	try {
		const res = ReviewService.getBriefReviewByLike();
		return res.data;
	} catch (err) {
		console.error('인기순 리뷰 조회 실패:', err);
		throw new Error('인기순 리뷰 조회에 실패했습니다.');
	}
};

// 리뷰 등록
export const postReview = async reviewData => {
	try {
		const res = await OrderService.postOrder(reviewData);
		return res.data;
	} catch (err) {
		console.error('리뷰 등록 실패:', err);
		throw new Error('리뷰 등록에 실패했습니다.');
	}
};
