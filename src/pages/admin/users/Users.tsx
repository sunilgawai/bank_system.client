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
import PageLayout from '../../../layout/PageLayout';
import { useEffect } from 'react';
import ApiService from '../../../services/ApiService';
import { setCustomers } from '../../../store/customerSlice';
import { useSelector, useDispatch } from 'react-redux';
// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ICustomer } from '../../../types';

const Users = () => {
  const notify = (m: string) => toast(m);
  const { customers } = useSelector((state: any) => state.store);
  const dispatch = useDispatch();
  useEffect(() => {
    ApiService.getCustomers()
      .then((results) => {
        console.log("customers", results.data);
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
      <ToastContainer />
      <Grid>
        <Box
          sx={(theme) => ({
            minHeight: '100vh',
            padding: theme.spacing(4)
          })}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Customer ID:</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Account No.</TableCell>
                  <TableCell align="right">Account Type</TableCell>
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
                        {customer.id.substring(0, 8)}
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
                            ApiService.deleteCustomer(customer.id)
                              .then((response) => {
                                if (response.status === 200) {
                                  notify('Customer deleted.');
                                  dispatch(setCustomers(customers.filter((c: ICustomer) => c.id !== customer.id)));
                                }
                              }).catch((error) => {
                                notify('Error deleting customer.');
                                console.log(error.response.data);
                              })
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

export default Users;