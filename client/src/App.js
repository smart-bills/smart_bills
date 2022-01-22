import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import Dashboard from './components/Dashboard';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// CSS
import './App.css';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Alert />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/dashboard' element={<Dashboard/>} />
					{/* <Route path='*' element={<Error />} /> */}
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
