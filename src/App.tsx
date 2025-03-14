import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';

import '../styles/fonts.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</Router>
	);
}

export default App;
