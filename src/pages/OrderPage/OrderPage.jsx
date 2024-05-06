import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getOrderTimesByDates } from '../../lib/api/order';
import Timeslot from '../../components/Timeslot/Timeslot';
import * as s from './Order.styles';
import MenuItem from '../../components/MenuItem/MenuItem';
import menuItems from '../../mock/menu.json';

const OrderPage = () => {
	const [orderTimes, setOrderTimes] = useState([]);
	const [selectedDay, setSelectedDay] = useState('8일');
	const [selectedDate, setSelectedDate] = useState(8);
	const [selectedTime, setSelectedTime] = useState('');

	useEffect(() => {
		getOrderTimesByDates()
			.then(data => {
				setOrderTimes(data.availabilityByTime);
			})
			.catch(err => console.error('Error fetching order times:', err));
	}, []);

	const handleDayChange = day => {
		setSelectedDay(day);
		const numericDay = day.replace(/[^0-9]/g, ''); // 정규 표현식을 사용하여 숫자만 추출
		setSelectedDate(numericDay);
	};

	const handleSlotSelect = (time, day) => {
		const timeMatch = time.match(/\(([^)]+)\)/); // 괄호 안의 내용을 찾는 정규 표현식
		if (timeMatch && timeMatch[1]) {
			setSelectedTime(timeMatch[1]); // 괄호 안의 내용만 저장
		} else {
			setSelectedTime(''); // 매치되는 시간 정보가 없으면 빈 문자열 저장
		}
	};

	// 메뉴별 수량 관리
	const [quantities, setQuantities] = useState(menuItems.map(() => 0));

	const handleQuantityChange = (index, newQuantity) => {
		const updatedQuantities = [...quantities];
		updatedQuantities[index] = newQuantity;
		setQuantities(updatedQuantities);
	};

	return (
		<>
			<Helmet>
				<title>예약 주문 (Pick up)</title>
			</Helmet>
			<s.Container>
				<form>
					<s.TimeBox>
						<s.SelectedInputBox>
							<s.SelectedInput
								type="text"
								value={selectedDate}
								name="date"
								className="date"
								readOnly
							/>
							일
							<s.SelectedInput
								type="text"
								value={selectedTime}
								name="time"
								className="time"
								readOnly
							/>
						</s.SelectedInputBox>
						<s.SelectBox>
							<s.TimeslotBox>
								<s.BoxTitle>날짜</s.BoxTitle>
								{['8일', '9일', '10일'].map(day => (
									<s.DayLabel key={day}>
										<s.DayInput
											type="checkbox"
											checked={selectedDay === day}
											onChange={() => handleDayChange(day)}
										/>
										{day}
									</s.DayLabel>
								))}
							</s.TimeslotBox>
							<s.TimeslotBox>
								<s.BoxTitle>시간</s.BoxTitle>
								<Timeslot
									day={selectedDay}
									orderTimes={orderTimes}
									onSlotSelect={handleSlotSelect}
								/>
							</s.TimeslotBox>
						</s.SelectBox>
					</s.TimeBox>
					<s.MenuBox>
						<s.MenuTitle>메뉴</s.MenuTitle>
						{menuItems.map((item, index) => (
							<MenuItem
								key={index}
								title={item.title}
								img={item.img}
								discount={item.discount}
								quantity={quantities[index]}
								onQuantityChange={newQuantity =>
									handleQuantityChange(index, newQuantity)
								}
							/>
						))}
					</s.MenuBox>
					<s.CustomerInfo></s.CustomerInfo>
				</form>
			</s.Container>
		</>
	);
};

export default OrderPage;
