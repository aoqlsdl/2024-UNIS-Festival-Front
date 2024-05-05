import { useState, useEffect } from 'react';
import { GetOrderTimesByDates } from '../../lib/api/order';
import * as s from './AuthStyles';

const AuthPage = () => {
	const [reservations, setReservations] = useState([]);

	useEffect(() => {
		GetOrderTimesByDates()
			.then(data => {
				setReservations(data.reservationList);
			})
			.catch(err => console.error('Error fetching order times:', err));
	}, []);
	return (
		<>
			<s.Container>
				<h3>Reservations</h3>
				<s.Table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Customer</th>
						</tr>
					</thead>
					<tbody>
						{reservations.map((r, index) => (
							<tr key={index}>
								<td>{r.date}</td>
								<td>{r.time}</td>
								<td>{r.customerName}</td>
							</tr>
						))}
					</tbody>
				</s.Table>
			</s.Container>
		</>
	);
};

export default AuthPage;
