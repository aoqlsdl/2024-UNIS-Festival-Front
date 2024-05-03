import { http } from '../http';

const OrderService = (() => ({
	// 예약 정렬: 날짜별 주문 가능한 시간대 조회
	getOrderTimesByDates: () => http.get('/reservations'),

	// 예약 추가
	postOrder: orderData => http.post('/reservations/add', orderData),
}))();

export default OrderService;
