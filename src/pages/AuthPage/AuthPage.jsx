import { useState, useEffect } from 'react';
import * as s from './AuthStyles';
import { getAuthInfo } from '../../lib/api/auth';

const AuthPage = () => {
	const [reservations, setReservations] = useState([]);

	useEffect(() => {
		getAuthInfo()
			.then(data => {
				setReservations(data);
			})
			.catch(err => console.error('관리자 정보 fetch 오류: ', err));
	}, []);

	return (
		<>
			<s.Container>
				<s.Table>
					<thead>
						<tr>
							<th>일</th>
							<th>시</th>
							<th>이름</th>
							<th>전화번호</th>
							<th>파닭전+매실레몬차</th>
							<th>이화햇살</th>
							<th>파닭전</th>
							<th>매실레몬차</th>
							<th>굿즈- 피자스티커3</th>
						</tr>
					</thead>
					<tbody>
						{reservations.map((r, index) => (
							<tr key={index}>
								<td>{r.date}</td>
								<td>{r.time}</td>
								<td>{r.customerName}</td>
								<td>{r.customerPhone}</td>
								<td>{r.menu1}개</td>
								<td>{r.menu2}개</td>
								<td>{r.menu3}개</td>
								<td>{r.menu4}개</td>
								<td>{r.menu5}개</td>
							</tr>
						))}
					</tbody>
				</s.Table>
			</s.Container>
		</>
	);
};

export default AuthPage;
