import { http } from '../http';

const AuthService = (() => ({
	// 예약 정렬: 날짜별 주문 가능한 시간대 조회
	getAuthInfo: () => http.get('/auth'),
}))();

export default AuthService;
