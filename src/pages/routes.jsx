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

const RoutesComponent = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<MainPage />} />
			</Route>
			<Route
				path="/orders"
				element={<NavbarLayout title="예약주문(pick up)" />}
			>
				<Route index element={<OrderListPage />} />
				<Route path=":order" element={<OrderPage />} /> {/* /orders/1 */}
			</Route>
			<Route path="/reviews" element={<NavbarLayout title="벗들의 찐후기" />}>
				<Route index element={<ReviewListPage />} />
				<Route path=":review" element={<ReviewPage />} /> {/* /reviews/1 */}
			</Route>
			<Route path="/auth" element={<ProtectedLayout />}>
				<Route index element={<AuthPage />} />
			</Route>
		</Routes>
	);
};

export default RoutesComponent;
