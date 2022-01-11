import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Users from './components/Users';
import Alert from './components/Alert';

//Redux
import { Provider } from 'react-redux';
import store from './store';

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
					<Route path='/user' element={<Users />} />
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
