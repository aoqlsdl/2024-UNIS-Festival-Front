import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/routes';

function App() {
	return (
		<BrowserRouter>
			<RouteChangeTracker />
			<Routes />
		</BrowserRouter>
	);
}

export default App;
