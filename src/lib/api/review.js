import ReviewService from './services/reviewservice';

export const GetReviewByTime = async () => {
	try {
		const res = ReviewService.getReviewByTime();
		return res.data;
	} catch (err) {
		console.error('최신순 리뷰 조회 실패:', err);
		throw new Error('최신순 리뷰 조회에 실패했습니다.');
	}
};

export const getReviewByLike = async reviewData => {
	try {
		const res = ReviewService.getReviewByLike();
		return Promise.resolve(res.data);
	} catch (err) {
		console.error('인기순 리뷰 조회 실패:', err);
		throw new Error('인기순 리뷰 조회에 실패했습니다.');
	}
};

export const postReview = async reviewData => {
	try {
		const res = await OrderService.postOrder(reviewData);
		return res.data;
	} catch (err) {
		console.error('리뷰 등록 실패:', err);
		throw new Error('리뷰 등록에 실패했습니다.');
	}
};
