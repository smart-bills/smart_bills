/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
	TextField,
	ToggleButtonGroup,
	ToggleButton,
	InputAdornment,
	Container,
	Typography,
} from '@mui/material';

function Step1_Bill(props) {
	const {
		storeName,
		setStoreName,
		billAmount,
		setBillAmount,
		tips,
		setTips,
		tax,
		setTax,
		description,
		setDescription,
		splitBy,
		handleSplitChange,
		setHasEmptyFields,
		showErrorMessage,
	} = props;

	useEffect(() => {
		if (!storeName || !billAmount || !tips || !tax) {
			setHasEmptyFields(true);
		} else {
			setHasEmptyFields(false);
		}
	}, [storeName, billAmount, tips, tax]);

	return (
		<React.Fragment>
			<ToggleButtonGroup
				color='primary'
				value={splitBy}
				exclusive
				onChange={handleSplitChange}
				fullWidth
				size='large'
			>
				<ToggleButton value='Split by People'>Split by People</ToggleButton>
				<ToggleButton value='Split by Dishes'>Split by Dishes</ToggleButton>
			</ToggleButtonGroup>

			{showErrorMessage && (
				<Typography sx={{ textAlign: 'center', color: 'red', pt: 1 }}>
					Please enter all the required fields.
				</Typography>
			)}

			<Container
				component='div'
				sx={{ display: 'flex', justifyContent: 'space-evenly', pt: 1, pb: 1 }}
			>
				<TextField
					autoFocus
					margin='normal'
					label='Restaurant name'
					type='text'
					variant='outlined'
					value={storeName}
					onChange={e => setStoreName(e.target.value)}
					required
					InputLabelProps={{ shrink: true }}
				/>

				<TextField
					margin='normal'
					label='Subtotal (Without tips and tax)'
					type='text'
					variant='outlined'
					value={billAmount}
					onChange={e => setBillAmount(e.target.value)}
					required
					InputProps={{
						startAdornment: <InputAdornment position='start'>$</InputAdornment>,
					}}
				/>
			</Container>

			<Container
				component='div'
				sx={{ display: 'flex', justifyContent: 'space-evenly' }}
			>
				<TextField
					margin='normal'
					label='Tips'
					type='text'
					variant='outlined'
					value={tips}
					onChange={e => setTips(e.target.value)}
					required
					InputProps={{
						startAdornment: <InputAdornment position='start'>$</InputAdornment>,
					}}
					sx={{ width: '42%' }}
				/>

				<TextField
					margin='normal'
					label='Tax in dollars'
					type='text'
					variant='outlined'
					value={tax}
					onChange={e => setTax(e.target.value)}
					required
					InputProps={{
						startAdornment: <InputAdornment position='start'>$</InputAdornment>,
					}}
				/>
			</Container>

			<TextField
				margin='normal'
				label='Description box'
				type='text'
				value={description}
				onChangeCapture={e => setDescription(e.target.value)}
				multiline
				rows={4}
				fullWidth
				InputLabelProps={{ shrink: true }}
			/>
		</React.Fragment>
	);
}

export default Step1_Bill;
