import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';

const RouteChangeTracker = () => {
	const history = useHistory();

	useEffect(() => {
		if (!window.location.href.includes('localhost')) {
			ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
		}

		// 페이지뷰를 전송하는 함수를 정의
		const sendPageView = location => {
			ReactGA.pageview(location.pathname + location.search);
		};

		// 초기 페이지 로딩 시 페이지뷰 전송
		sendPageView(history.location);

		// 라우트 변경 감지 시 페이지뷰 전송
		const unlisten = history.listen(location => {
			sendPageView(location);
		});

		// 컴포넌트 언마운트 시 리스너 해제
		return unlisten;
	}, [history]);

	return null;
};

export default RouteChangeTracker;
