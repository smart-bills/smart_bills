import * as React from 'react';
// import Button from '@mui/material/Button';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

function Home() {
	//const theme = createTheme();

	return (
		<div>
			<nav className='navbar bg-dark'>
				<div className='row'>
					<div className='logo'>
						<img src='../../home.png' height='200' alt='Home Logo' />
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Home;
