import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// MUI
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[500]
		}
	}
})

const item = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	px: 5,
};

const Root = styled('section')(({ theme }) => ({
	color: theme.palette.common.white,
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
	  height: '80vh',
	  minHeight: 500,
	  maxHeight: 1300,
	},
}));
  
const Background = styled(Box)({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	zIndex: -2,
});

function Home() {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			navigate('/dashboard');
		}
	});

	return (
		<div>
			<Root>
				<Container
					sx={{
						mt: 3,
						mb: 14,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>

					<img
						style={{display: 'none'}}
						src={'../../home1.jpg'}
						alt="increase priority"
					/>

					<Typography color="inherit" align="center" variant="h3" marked="center">
						Welcome to SmartBills
					</Typography>

					<Typography
						color="inherit"
						align="center"
						variant="h5"
						sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
					>
						SmartBills allows you to manage and split your restaurant bills more easily. 
					</Typography>
					
					<ThemeProvider theme={theme}>
						<Button
							color="primary"
							variant="contained"
							size="large"
							component="a"
							href="/signup"
							sx={{ minWidth: 200 }}
						>
							Try It Out
						</Button>
					</ThemeProvider>

					<Box
						sx={{
							position: 'absolute',
							left: 0,
							right: 0,
							top: 0,
							bottom: 0,
							backgroundColor: 'common.black',
							opacity: 0.5,
							zIndex: -1,
						}}
					/>
					
					<Background sx={{
							backgroundImage: `url(${'../../home1.jpg'})`,
							backgroundPosition: 'center'}} 
					/>

				</Container>
			</Root>

			<Box component="section" sx={{ display: 'flex', 
										   overflow: 'hidden'}}
    		>
				<Container sx={{ mt: 15, mb: 20, display: 'flex', position: 'relative' }}>
					<Box
						component="img"
						src="../../productCurvyLines.png"
						alt="curvy lines"
						sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
					/>
					<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
						<Box
							component="img"
							src="../../easeofuse.png"
							alt="ease of use"
							sx={{ height: 55 }}
						/>
						<Typography variant="h6" sx={{ my: 5 }}>
							Ease of Use
						</Typography>
						<Typography variant="h5">
							{
								'Using SmartBills is easy. You just need to add a bill and fill out the info of the bill.'
							}
						</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
						<Box
							component="img"
							src="../../split.png"
							alt="split bills"
							sx={{ height: 55 }}
						/>
						<Typography variant="h6" sx={{ my: 5 }}>
							Split the Bill in Multiple Way
						</Typography>
						<Typography variant="h5">
							{
								'You can decide if you want to go dutch or pay equally with your friends.'
							}
						</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
						<Box
							component="img"
							src="../../email.png"
							alt="email icon"
							sx={{ height: 55 }}
						/>
						<Typography variant="h6" sx={{ my: 5 }}>
							Email Remainder
						</Typography>
						<Typography variant="h5">
							{
								'By sending out an email to your friends, you can avoid asking them to pay face to face.'
							}
						</Typography>
						</Box>
					</Grid>
					</Grid>
				</Container>
    		</Box>

		</div>
	);
}

export default Home;