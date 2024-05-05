import { useEffect, useState } from 'react';
import * as s from './OrderList.styles';
import { getOrderTimesByDates } from '../../lib/api/order';
import useHideCustomerName from '../../hooks/useHideCustomerName';
import useMealTime from '../../hooks/useMealTime';
import { Helmet } from 'react-helmet';

const OrderListPage = () => {
	const [reservations, setReservations] = useState([]);

	useEffect(() => {
		getOrderTimesByDates()
			.then(data => {
				setReservations(data.reservationList);
			})
			.catch(err => console.error('주문자 정보 fetch 실패!: ', err));
	}, []);
	return (
		<>
			<Helmet>
				<title>예약 주문 (Pick up)</title>
			</Helmet>
			<s.Container>
				<s.Content>
					<s.Title>주문 방법</s.Title>
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
