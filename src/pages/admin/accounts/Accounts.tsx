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
import { useEffect, useState } from 'react';
import AccountService from '../../../services/AccountService';
import { IAccount } from '../../../types';

// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Accounts = () => {
  const notify = (message: string) => toast(message);
  const [accounts, setAccounts] = useState<IAccount[]>();
  useEffect(() => {
    AccountService.getAccounts()
      .then((results) => {
        setAccounts(results.data);
        // console.log("accounts", results.data);
      }).catch((err) => {
        console.log("accounts", err);
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
                  <TableCell>Account ID.</TableCell>
                  <TableCell>Account No.</TableCell>
                  <TableCell align="right">Owner</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">Ammount</TableCell>
                  <TableCell align="center">View</TableCell>
                  {/* <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts &&
                  accounts.map((account: IAccount, idx: number) => (
                    <TableRow key={idx}>
                      {/* {JSON.stringify(account)} */}
                      <TableCell component="th" scope="row">
                        {account.id.substring(0, 9)}
                      </TableCell>
                      <TableCell align="center">{account.account_number}</TableCell>
                      <TableCell align="right">{account.Customer[0]?.first_name}</TableCell>
                      <TableCell align="right">{account.account_type}</TableCell>
                      <TableCell align="right">{account.account_balance}</TableCell>
                      <TableCell align="center">
                        <Button variant="outlined" component={Link} to={`/admin/accounts/${account.id}`} size="small" color="primary">
                          View
                        </Button>
                      </TableCell>
                      {/* <TableCell align="right">
                        <Button
                          component={Link}
                          to={`/admin/accounts/update/${account.id}`}
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
                            AccountService.deleteAccounts(account.id)
                              .then((res) => {
                                if (res.status === 200) {
                                  notify("Account Deleted.");
                                  setAccounts(accounts.filter((a) => a.id !== account.id));
                                }
                              })
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

export default Accounts;