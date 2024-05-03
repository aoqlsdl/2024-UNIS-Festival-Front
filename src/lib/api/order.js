import OrderService from './services/orderservice';

export const GetOrderTimesByDates = async () => {
	try {
		const res = await OrderService.getOrderTimesByDates();
		return res.data;
	} catch (err) {
		console.error('예약 가능 여부 조회 실패:', err);
		throw new Error('예약 가능 여부 조회에 실패했습니다.');
	}
};

export const PostOrder = async orderData => {
	try {
		const res = await OrderService.postOrder(orderData);
		return res.data;
	} catch (err) {
		console.error('예약 요청 실패:', err);
		throw new Error('예약 요청에 실패했습니다.');
	}
};
