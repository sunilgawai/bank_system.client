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
import { Link } from 'react-router-dom';
import PageLayout from '../../layout/PageLayout';
import { useEffect } from 'react';
import ApiService from '../../services/ApiService';
import { setCustomers } from '../../store/customerSlice';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const AccountTransactions = () => {
  const { customers } = useAppSelector((state) => state.store);
  const dispatch = useAppDispatch();
  useEffect(() => {
    ApiService.getCustomers()
      .then((results) => {
        // console.log("customers", results.data);
        dispatch(setCustomers(results.data));
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
                  <TableCell align="center">From</TableCell>
                  <TableCell align="right">To</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Ammount</TableCell>
                  <TableCell align="center">View</TableCell>
                  <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers &&
                  customers.map((customer: any, idx: number) => (
                    <TableRow key={idx}>
                      {/* {JSON.stringify(customer)} */}
                      <TableCell component="th" scope="row">
                        {customer.id}
                      </TableCell>
                      <TableCell align="right">{customer.email}</TableCell>
                      <TableCell align="right">{customer.first_name}</TableCell>
                      <TableCell align="right">{customer.account.account_number}</TableCell>
                      <TableCell align="right">{customer.account.account_type}</TableCell>
                      <TableCell>
                        <Button variant="outlined" component={Link} to={`/admin/customers/${customer.id}`} size="small" color="primary">
                          View
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          component={Link}
                          to={`/admin/customers/update/${customer.id}`}
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
                      </TableCell>
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

export default AccountTransactions;