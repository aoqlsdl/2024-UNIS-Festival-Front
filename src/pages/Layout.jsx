import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import * as s from './LayoutStyles';

const Layout = () => {
	return (
		<>
			<s.Container>
				<s.Wrapper>
					<Outlet />
				</s.Wrapper>
				<Footer />
			</s.Container>
		</>
	);
};

export default Layout;
