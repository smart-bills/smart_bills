import * as React from 'react';

// MUI
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function Home() {
	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	});
	return (
		<Paper
			sx={{
				p: 5,
				margin: 'auto',
				maxWidth: 600,
				flexGrow: 1,
				mt: 5,
			}}
		>
			<Grid container spacing={2}>
				<Grid item>
					<Typography
						gutterBottom
						component='div'
						variant='h3'
						sx={{ textAlign: 'center' }}
					>
						Welcome to SmartBills
					</Typography>
					<Img alt='home' src='../../home.png' />
				</Grid>
			</Grid>
			<Grid item>
				<Button
					href='/login'
					Button
					color='inherit'
					variant='outlined'
					sx={{ mt: 1 }}
				>
					Login
				</Button>
				<Button
					href='/signup'
					Button
					color='inherit'
					variant='outlined'
					sx={{ mt: 1, mx: 1 }}
				>
					Sign up
				</Button>
			</Grid>
		</Paper>
	);
}

export default Home;
