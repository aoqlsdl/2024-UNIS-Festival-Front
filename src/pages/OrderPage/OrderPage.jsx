import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { getOrderTimesByDates } from '../../lib/api/order';
import Timeslot from '../../components/Timeslot/Timeslot';
import * as s from './Order.styles';
import MenuItem from '../../components/MenuItem/MenuItem';
import menuItems from '../../mock/menu.json';
import OrderModal from '../../components/OrderModal/OrderModal';
import { postOrder } from '../../lib/api/order';
import { formatPhoneNumber } from '../../lib/utils';

const dayMapping = {
	'8일': 1,
	'9일': 2,
	'10일': 3,
};

const OrderPage = () => {
	const [orderTimes, setOrderTimes] = useState([]);
	const [selectedDay, setSelectedDay] = useState('8일');
	const [selectedDate, setSelectedDate] = useState(8);
	const [selectedTime, setSelectedTime] = useState('');
	const [quantities, setQuantities] = useState(menuItems.map(() => 0));
	const [customerName, setCustomerName] = useState('');
	const [customerPhone, setCustomerPhone] = useState('');

	const [showNameError, setShowNameError] = useState(false);
	const [showPhoneError, setShowPhoneError] = useState(false);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		getOrderTimesByDates()
			.then(data => {
				setOrderTimes(data.availabilityByTime);
			})
			.catch(err => console.error('Error fetching order times:', err));
	}, []);

	const handleDayChange = day => {
		setSelectedDay(day);
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
	const handleQuantityChange = (index, newQuantity) => {
		const updatedQuantities = [...quantities];
		updatedQuantities[index] = newQuantity;
		setQuantities(updatedQuantities);
	};

	const handleCustomerNameChange = e => {
		setCustomerName(e.target.value);
		if (e.target.value) {
			setShowNameError(false);
		}
	};

	const handleCustomerPhoneChange = e => {
		const formattedPhone = formatPhoneNumber(e.target.value);
		setCustomerPhone(formattedPhone);

		if (formattedPhone) {
			setShowPhoneError(false);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		let valid = true;

		const selectedDate = dayMapping[selectedDay]; // 8일 -> 1, 9일 -> 2, 10일 -> 3으로 변환

		if (!selectedDate || !selectedTime) valid = false;

		const totalQuantity = quantities.reduce((sum, qty) => sum + qty, 0);
		if (totalQuantity === 0) valid = false;

		if (!customerName) {
			setShowNameError(true);
			valid = false;
		}

		if (!customerPhone || !customerPhone.match(/^\d{3}-\d{4}-\d{4}$/)) {
			setShowPhoneError(true);
			valid = false;
		}

		if (!valid) {
			alert('폼에 오류가 있습니다. 내용을 확인해주세요.');
			return;
		}

		const orderData = {
			date: selectedDate,
			time: selectedTime,
			menu1: quantities[0],
			menu2: quantities[1],
			menu3: quantities[2],
			menu4: quantities[3],
			menu5: quantities[4],
			customerName,
			customerPhone,
		};

		try {
			const result = await postOrder(orderData);
			console.log('주문 성공: ', result);
			setIsModalOpen(false);
			alert('주문이 정상적으로 완료되었습니다!');
			navigate('/orders');
		} catch (error) {
			console.error('주문 요청 중 에러 발생: ', error);
			alert('주문이 정상적으로 처리되지 않았습니다!');
		}
	};

	return (
		<>
			<Helmet>
				<title>예약 주문 (Pick up)</title>
			</Helmet>
			<s.Container>
				<form onSubmit={handleSubmit}>
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
					<s.CustomerInfo>
						<s.MenuTitle>주문자 정보</s.MenuTitle>
						<s.InfoBox>
							<s.InfoTitle>
								예약자명{showNameError && <span>이름을 입력해주세요.</span>}
							</s.InfoTitle>
							<s.InfoInput
								maxLength={10}
								onChange={e => handleCustomerNameChange(e)}
							/>
						</s.InfoBox>
						<s.InfoBox>
							<s.InfoTitle>
								전화번호 (010-XXXX-XXXX){' '}
								{showPhoneError && <span>전화번호를 입력해주세요.</span>}
							</s.InfoTitle>
							<s.InfoInput
								type="text"
								onChange={handleCustomerPhoneChange}
								value={customerPhone}
							/>
						</s.InfoBox>
						<s.Warning>
							*예약자명과 입금자명이 일치해야 합니다. <br />
							*기입하신 전화번호로 예약 문자가 전송됩니다.
							<s.Account>*입금처: 기업 119-236332-02-010 노*경</s.Account>
						</s.Warning>
					</s.CustomerInfo>
					<s.Order type="button" onClick={() => setIsModalOpen(true)}>
						픽업주문하기
					</s.Order>
				</form>
			</s.Container>
			<OrderModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSubmit={handleSubmit}
			/>
		</>
	);
};

export default OrderPage;
