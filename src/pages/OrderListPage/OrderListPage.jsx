import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as s from './OrderList.styles';
import { getOrderTimesByDates } from '../../lib/api/order';
import useHideCustomerName from '../../hooks/useHideCustomerName';
import useMealTime from '../../hooks/useMealTime';

const OrderListPage = () => {
	const [reservations, setReservations] = useState([]);

	useEffect(() => {
		getOrderTimesByDates()
			.then(data => {
				setReservations(data.reservationList);
			})
			.catch(err => console.error('주문자 정보 fetch 실패!: ', err));
	}, []);

	const bg = import.meta.env.VITE_IMAGE_URL + 'imgs/order_info_bg.webp';

	// 픽업 주문 페이지로 이동
	const navigate = useNavigate();

	const goToReservation = () => {
		navigate(`/orders/order`);
	};
	return (
		<>
			<Helmet>
				<title>예약 주문 (Pick up)</title>
			</Helmet>
			<s.Container>
				<s.Content>
					<s.Title>주문 방법</s.Title>
					<s.Manual bg={bg}>
						<s.ManualTitle className="warning">
							!픽업 시간 <s.UnderlinedText>30분 전</s.UnderlinedText>까지 예약
							가능!
						</s.ManualTitle>
						<s.ManualContent>
							<s.ManualTitle>1. 예약 설정</s.ManualTitle>
							<s.ManualDesc>
								픽업하고 싶은 날짜와 시간을 선택하세요.
							</s.ManualDesc>
						</s.ManualContent>
						<s.ManualContent>
							<s.ManualTitle>2. 메뉴 선택</s.ManualTitle>
							<s.ManualDesc>메뉴를 선택해 주세요.</s.ManualDesc>
						</s.ManualContent>
						<s.ManualContent className="last-info">
							<s.ManualTitle>3. 예약 완료</s.ManualTitle>
							<s.ManualDesc>
								픽업주문하기 후 ➡️ 비용을 입금하면 픽업 예약 완료!
							</s.ManualDesc>
						</s.ManualContent>
						<s.Order type="button" onClick={() => goToReservation()}>
							픽업주문하기
						</s.Order>
					</s.Manual>
				</s.Content>
				<s.Content className="pickup">
					<s.Title>벗들의 Pick-up</s.Title>
					<s.ReservationBox>
						<s.Reservations>
							{reservations.map((r, index) => (
								<s.Reservation key={index}>
									<s.Date>
										{r.date}일 {useMealTime(r.time)}
									</s.Date>
									<s.Customer>{useHideCustomerName(r.customerName)}</s.Customer>
								</s.Reservation>
							))}
						</s.Reservations>
					</s.ReservationBox>
				</s.Content>
			</s.Container>
		</>
	);
};

export default OrderListPage;
