import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

// pathname이 바뀔 때마다 Google Analytics에 페이지뷰 전송
const RouteChangeTracker = () => {
	const location = useLocation();

	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (!window.location.href.includes('localhost')) {
			ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
		}
		setInitialized(true);
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.pageview(location.pathname + location.search);
		}
	}, [initialized, location]);

	return null;
};

export default RouteChangeTracker;
