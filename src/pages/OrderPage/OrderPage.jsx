import { useState, useEffect } from 'react';
import { GetOrderTimesByDates } from '../../lib/api/order';

const OrderPage = () => {
	const [orderDate, setOrderDate] = useState();
	const [orderTime, setOrderTime] = useState();

	useEffect(() => {
		GetOrderTimesByDates()
			.then(res => {
				setOrderDate(res);
				setOrderTime(res);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<>
			<div>{orderDate}</div>
			<div>{orderTime}</div>
		</>
	);
};

export default OrderPage;
