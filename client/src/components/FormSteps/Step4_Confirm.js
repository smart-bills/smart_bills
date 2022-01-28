import React from 'react';
import {Container, Typography, Paper,
        Table, TableBody, TableCell,
        TableContainer, TableHead, TableRow
} from '@mui/material'

function Step4_Confirm({storeName, billAmount, tips, tax, splitBy, dishes, invitees}) {


    return (
        <React.Fragment>
            <Container sx={{mb: 2}}>
                <Container sx={{mt: 1}}>
                    <Typography variant='h5' align='center' sx={{fontWeight: '400', textDecoration: 'underline'}}>
                        {storeName}
                    </Typography>
                </Container>
                
                <TableContainer component={Paper} elevation={4} sx={{borderTop: '1px solid rgb(0 0 0 / 20%)'}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' sx={{p: 0}}>
                                    Subtotal
                                </TableCell>
                                <TableCell align='center' sx={{p: 0}}>
                                    Tips
                                </TableCell>
                                <TableCell align='center' sx={{p: 0}}>
                                    Tax
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" sx={{pb: 1, pt: 1}}>${billAmount}</TableCell>
                                <TableCell align="center" sx={{pb: 1, pt: 1}}>${tips}</TableCell>
                                <TableCell align="center" sx={{pb: 1, pt: 1}}>${tax}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            
            {splitBy === 'Split by People' ? 
                <Container>
                    <Container sx={{mt: 1, mb: 2}}>
                        <Container sx={{mt: 1}}>
                            <Typography variant='h5' align='center' sx={{fontWeight: '400', textDecoration: 'underline'}}>
                                Dishes
                            </Typography>
                        </Container>

                        <TableContainer component={Paper} elevation={4} sx={{borderTop: '1px solid rgb(0 0 0 / 20%)'}}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' sx={{p: 0}}>
                                            Dish
                                        </TableCell>
                                        <TableCell align='center' sx={{p: 0}}>
                                            Cost
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {dishes.map((dish, index) => (
                                        <TableRow key={index}>
                                            <TableCell align='center' sx={{pb: 1, pt: 1}}>{dish.dishName}</TableCell>
                                            <TableCell align='center' sx={{pb: 1, pt: 1}}>${dish.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>

                    <Container>
                        <Container sx={{mt: 1}}>
                            <Typography variant='h5' align='center' sx={{fontWeight: '400', textDecoration: 'underline'}}>
                                Invitees
                            </Typography>
                        </Container>

                        <TableContainer component={Paper} elevation={4} sx={{borderTop: '1px solid rgb(0 0 0 / 20%)'}}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' sx={{p: 0}}>
                                            Invitee
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {invitees.map((invitee, index) => (
                                        <TableRow key={index}>
                                            <TableCell align='center' sx={{pb: 1, pt: 1}}>{invitee}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </Container>
                :
                <Container>
                    <Container sx={{mt: 1, mb: 2}}>
                        <Container sx={{mt: 1}}>
                            <Typography variant='h5' align='center' sx={{fontWeight: '400', textDecoration: 'underline'}}>
                                Dishes
                            </Typography>
                        </Container>

                        <TableContainer component={Paper} elevation={4} sx={{borderTop: '1px solid rgb(0 0 0 / 20%)'}}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' sx={{p: 0}}>
                                            Dish
                                        </TableCell>
                                        <TableCell align='center' sx={{p: 0}}>
                                            Cost
                                        </TableCell>
                                        <TableCell align='center' sx={{p: 0}}>
                                            Invitee
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {dishes.map((dish, index) => (
                                        <TableRow key={index}>
                                            <TableCell align='center' sx={{pb: 1, pt: 1}}>{dish.dishName}</TableCell>
                                            <TableCell align='center' sx={{pb: 1, pt: 1}}>${dish.amount}</TableCell>
                                            <TableCell align='center' sx={{pb: 1, pt: 1}}>{dish.userEmail}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </Container>
            }
        </React.Fragment>
    );
}

export default Step4_Confirm;
