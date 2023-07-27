import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
  Button,
  // Stack,
} from '@mui/material';
// import { Link } from 'react-router-dom';
import PageLayout from '../../../layout/PageLayout';
import { useEffect, useState } from 'react';
import AccountService from '../../../services/AccountService';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    AccountService.getAllAccountHistory()
      .then((results) => {
        // console.log("customers", results.data);
        setTransactions(results.data);
      }).catch((err) => {
        console.log("customers", err);
      })
  }, []);
  return (
    <PageLayout>
      {/* <Button color='success' size='large' variant='outlined'>
        <Link to='/admin/customers/create'>+ Customer</Link>
      </Button> */}
      <Grid>
        <Box
          sx={(theme) => ({
            minHeight: '100vh',
            padding: theme.spacing(4)
          })}
        > Account Transactions
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Transaction ID:</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Time</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Ammount</TableCell>
                  {/* <TableCell align="center">View</TableCell>
                  <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions &&
                  transactions.map((transaction: any, idx: number) => (
                    <TableRow key={idx}>
                      {/* {JSON.stringify(transaction)} */}
                      <TableCell component="th" scope="row">
                        {transaction.id.substring(0, 8)}
                      </TableCell>
                      <TableCell align="left">{new Date(transaction.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell align="left">{new Date(transaction.createdAt).toLocaleTimeString()}</TableCell>
                      <TableCell align="left">{transaction.transaction_type}</TableCell>
                      <TableCell align="left">{transaction.transaction_amount}</TableCell>
                      {/* <TableCell align="right">{transaction.account.account_type}</TableCell> */}
                      {/* <TableCell>
                        <Button variant="outlined" component={Link} to={`/admin/customers/${transaction.id}`} size="small" color="primary">
                          View
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          component={Link}
                          to={`/admin/customers/update/${transaction.id}`}
                          size="small"
                          variant="outlined"
                          color="success"
                        >
                          Update
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => {
                            console.log("clicked")
                          }}
                          variant="outlined"
                          color="error"
                          size="small"
                        >
                          Delete
                        </Button>
                      </TableCell> */}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </PageLayout>
  )
}

export default Transactions;