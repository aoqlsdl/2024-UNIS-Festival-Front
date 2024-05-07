import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NavbarLayout from './NavbarLayout';
import MainPage from './MainPage/MainPage';
import OrderPage from './OrderPage/OrderPage';
import ReviewListPage from './ReviewListPage/ReviewListPage';
import ReviewPage from './ReviewPage/ReviewPage';
import OrderListPage from './OrderListPage/OrderListPage';
import ProtectedLayout from './ProtectedLayout';
import AuthPage from './AuthPage/AuthPage';
import useScrollToTop from '../hooks/useScrollToTop';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import BeforeOpen from '../components/BeforeOpen/BeforeOpen';

const RoutesComponent = () => {
	useScrollToTop();

	// 현재 날짜와 시간을 확인
	const currentDate = new Date();
	const openDate = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		8
	); // 5월 8일을 설정 (월은 0부터 시작하므로 5월은 4)

	// 5월 8일 0시 이전인지 확인
	const isBeforeOpen = currentDate < openDate;
	return (
		<Routes>
			{/* not found */}
			<Route path="*" element={<NotFoundPage />} />

			{/* 정상 경로 */}
			{/* {isBeforeOpen ? (
				<Route path="/">
					<Route index element={<BeforeOpen />} />
				</Route>
			) : (
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
				</Route>
			)} */}

			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
			</Route>

			<Route path="/orders" element={<NavbarLayout title="예약 주문" />}>
				<Route index element={<OrderListPage />} />
				<Route path="order" element={<OrderPage />} /> /orders/1
			</Route>
			<Route path="/reviews" element={<NavbarLayout title="벗들의 찐후기" />}>
				<Route index element={<ReviewListPage />} />
				<Route path="review" element={<ReviewPage />} /> /reviews/1
			</Route>
			<Route path="/auth" element={<ProtectedLayout />}>
				<Route index element={<AuthPage />} />
			</Route>
		</Routes>
	);
};

export default RoutesComponent;
