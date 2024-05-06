import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getOrderTimesByDates } from '../../lib/api/order';
import useHideCustomerName from '../../hooks/useHideCustomerName';

const OrderPage = () => {
	const [reservations, setReservations] = useState([]);
	const [orderTimes, setOrderTimes] = useState([]);

	useEffect(() => {
		getOrderTimesByDates()
			.then(data => {
				setOrderTimes(data.availabilityByTime);
				setReservations(data.reservationList);
			})
			.catch(err => console.error('Error fetching order times:', err));
	}, []);

	return (
		<>
			<Helmet>
				<title>예약 주문 (Pick up)</title>
			</Helmet>
			<h2>기다리지 말고 현장에서 바로 픽업!</h2>
			<ul>
				{orderTimes.map((t, index) => (
					<li key={index}>
						Time slot {index}: {t === 1 ? '예약 가능' : '예약 불가'}
					</li>
				))}
			</ul>
			<h2>벗들의 Pick Up</h2>
			<ul>
				{reservations.map((r, index) => (
					<li key={index}>
						Date: {r.date}, Time: {r.time}, Customer:
						{useHideCustomerName(r.customerName)}
					</li>
				))}
			</ul>
		</>
	);
};

export default OrderPage;
