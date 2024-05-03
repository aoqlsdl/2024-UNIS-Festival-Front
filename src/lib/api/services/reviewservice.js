import { http } from '../http';

const ReviewService = (() => ({
	// 리뷰 최신순 정렬
	getReviewByTime: () => http.get('/reviews/latest'),

	// 리뷰 인기순 정렬
	getReviewByLike: () => http.get('/reviews/best'),

	// 리뷰 등록
	postReview: reviewData => http.post('/reviews/add', reviewData),
}))();

export default ReviewService;
