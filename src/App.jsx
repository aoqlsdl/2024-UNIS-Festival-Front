import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/routes';
import RouteChangeTracker from './lib/routeChangeTracker';

function App() {
	return (
		<BrowserRouter>
			<RouteChangeTracker />
			<Routes />
		</BrowserRouter>
	);
}

export default App;
