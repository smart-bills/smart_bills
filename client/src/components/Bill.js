import React, { useState } from 'react';
import { Button, Typography, Paper, Collapse, Grid, Box } from '@mui/material';
import axios from 'axios';
import {
	ThemeProvider,
	createTheme,
	experimentalStyled as styled,
} from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Bill({ billInfo: bill, setRefresh, createAt }) {
	const [expanded, setIsExpanded] = useState(false);
	const [viewOrCollapse, setViewOrCollapse] = useState('View More...');

	const date = new Date(createAt);

	function showMoreDetails() {
		setIsExpanded(!expanded);
		if (viewOrCollapse === 'View More...') setViewOrCollapse('Collapse');
		else setViewOrCollapse('View More...');
	}

	async function deleteBill() {
		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };

		const billid = bill._id;
		const url = `http://localhost:8000/app/bill/?billid=${billid}`;

		await axios.delete(url, { headers });
		setIsExpanded(!expanded);
		setRefresh(true);
	}

	async function markPaid() {
		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };
		const body = { billid: bill._id };
		const url = `http://localhost:8000/app/dashboard/paid/`;
		await axios.put(url, body, { headers });
		setRefresh(true);
	}

	async function markUnpaid() {
		const token = localStorage.getItem('token');
		const headers = { 'x-auth-token': token };
		const body = { billid: bill._id };
		const url = `http://localhost:8000/app/dashboard/unpaid/`;
		await axios.put(url, body, { headers });
		setRefresh(true);
	}
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,
		textAlign: 'left',
		color: theme.palette.text.secondary,
		height: 20,
		lineHeight: '20px',
	}));
	const lightTheme = createTheme({ palette: { mode: 'light' } });

	return (
		// The default for column is 12, but it can be increased.
		<Grid container sx={{ margin: '1.5em' }} spacing={2} column={12}>
			<Grid item xs={3} />

			<Grid item xs={6}>
				<Paper elevation={5} sx={{ maxWidth: 450 }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
						}}
					>
						<Typography variant='h5' component='h3' sx={{ pl: 2, pt: 2 }}>
							{bill.storeName.toUpperCase()}
						</Typography>

						<Typography variant='subtitle1' sx={{ pr: 3 }}>
							{date.toLocaleDateString()}
						</Typography>
					</Box>

					<Grid container sx={{ pb: 1 }}>
						<Grid item xs={4}>
							<Typography
								variant='subtitle1'
								component='h4'
								sx={{ pl: 3, pt: 1 }}
							>
								Total: {`$${bill.tax + bill.tips + bill.amount}`}
							</Typography>
						</Grid>
					</Grid>

					{bill.description && (
						<Typography
							variant='subtitle1'
							component='h4'
							sx={{ pl: 3, pt: 1 }}
						>
							Description: {bill.description}
						</Typography>
					)}

					{viewOrCollapse === 'View More...' ? (
						<Button
							onClick={showMoreDetails}
							sx={{ pl: 3 }}
							startIcon={<ExpandMoreIcon />}
						>
							{' '}
							{viewOrCollapse}{' '}
						</Button>
					) : (
						<Button
							onClick={showMoreDetails}
							sx={{ pl: 3 }}
							startIcon={<ExpandLessIcon />}
						>
							{' '}
							{viewOrCollapse}{' '}
						</Button>
					)}

					<Collapse component='div' in={expanded}>
						{bill.dishes.map((dish, index) => {
							return (
								<Grid columns={{ xs: 4, sm: 8, md: 7 }} marginLeft={4}>
									{[lightTheme].map((theme, index) => (
										<Grid item xs={6} key={index}>
											<ThemeProvider theme={theme}>
												<Box
													sx={{
														p: 2,
														bgcolor: 'background.default',
														display: 'grid',
														gridTemplateColumns: { md: '1fr 1fr' },
														gap: 2,
													}}
												>
													{[0].map(elevation => (
														<Item key={elevation} elevation={elevation}>
															{dish.dishName}
														</Item>
													))}
													{[0].map(elevation => (
														<Item key={elevation} elevation={elevation}>
															${dish.amount}
														</Item>
													))}
												</Box>
											</ThemeProvider>
										</Grid>
									))}
								</Grid>
							);
						})}
						<Typography
							textAlign='right'
							variant='subtitle1'
							component='h4'
							sx={{ pr: 2, pt: 1 }}
						>
							Subtotal: {`$${bill.amount}`}
						</Typography>
						<Typography
							textAlign='right'
							variant='subtitle1'
							component='h4'
							sx={{ pr: 2, pt: 1 }}
						>
							Tip: {`$${bill.tips}`}
						</Typography>
						<Typography
							textAlign='right'
							variant='subtitle1'
							component='h4'
							sx={{ pr: 2, pt: 1 }}
						>
							Tax: {`$${bill.tax}`}
						</Typography>

						<Grid container column={12} spacing={1} marginTop={2}>
							<Grid marginLeft={2} item xs={8.5}>
								{bill.paid ? (
									<Button onClick={markUnpaid}>Unpay</Button>
								) : (
									<Button onClick={markPaid}>Paid</Button>
								)}
							</Grid>
							<Grid item xs={2}>
								<Button onClick={deleteBill} startIcon={<DeleteIcon />}>
									delete
								</Button>
							</Grid>
						</Grid>
					</Collapse>
				</Paper>
			</Grid>

			<Grid item xs={3} />
		</Grid>
	);
}

export default Bill;
