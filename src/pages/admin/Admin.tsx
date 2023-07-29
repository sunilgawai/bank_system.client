import { Box, Divider, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Stack,
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../layout/PageLayout';
import { useAppSelector } from '../../store/hooks';
import AccountService from '../../services/AccountService';
import { useEffect, useState } from 'react';

const Admin = () => {

  const [details, setDetails] = useState({
    accounts: 0,
    customers: 0,
    documents: 0,
    transactions: 0
  })
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    AccountService.getAllDetails().then((response) => {
      console.log(response);
      setDetails(response.data)
      setLogs(response.data.logs);
      // console.log('details', details);
    }).catch((err) => {
      console.log(err);
    })
    // AccountService.getAccountLogs().then((response) => {
    //   console.log(response.data);
    //   setLogs(response.data)
    //   // console.log('details', details);
    // }).catch((err) => {
    //   console.log(err);
    // })
  }, [])

  return (
    <>
      <PageLayout>
        <Divider sx={{ mb: 4 }} />
        {/* {JSON.stringify(auth)} */}
        <Formik
          initialValues={{ data: '' }}
          validationSchema={Yup.object().shape({
            Admin: Yup.string().max(255).required('Admin is required'),
          })}
          onSubmit={async (formik) => { }}
        >
          {({ handleBlur, handleChange }) => (
            <form onSubmit={e => e.preventDefault()}>
              <Grid container spacing={2} px={12}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="middle_name">Total Accounts</InputLabel>
                    <OutlinedInput
                      id="middle_name"
                      type="middle_name"
                      value={details.accounts}
                      name="middle_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="middle_name">Total Customers</InputLabel>
                    <OutlinedInput
                      id="middle_name"
                      type="middle_name"
                      value={details.customers}
                      name="middle_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="middle_name">Total Transactions</InputLabel>
                    <OutlinedInput
                      id="middle_name"
                      type="middle_name"
                      value={details.transactions}
                      name="middle_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="phone-signup">Total Documents</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="phone-signup"
                      value={details.documents}
                      name="phone"
                      onBlur={handleBlur}
                      placeholder="Phone No."
                      inputProps={{}}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        <Divider sx={{ mt: 4 }} />
        <Typography fontSize={'large'} fontStyle={'italic'} my={4}>Recent Activities...</Typography>
        <Box pb={4}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Activity ID.</TableCell>
                  <TableCell>Activity By</TableCell>
                  <TableCell align="left">Activity Type</TableCell>
                  <TableCell align="left">Activity Date</TableCell>
                  <TableCell align="left">Activity Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {logs &&
                  logs.map((log: any, idx: number) => (
                    <TableRow key={idx}>
                      {/* {JSON.stringify(account)} */}
                      <TableCell component="th" scope="row">
                        {log.id.substring(0, 9)}
                      </TableCell>
                      <TableCell align="left">{log.log_by}</TableCell>
                      <TableCell align="left">{log.log_type}</TableCell>
                      {/* <TableCell align="center">{log.id}</TableCell> */}
                      <TableCell align="left">{new Date(log.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell align="left">{new Date(log.createdAt).toLocaleTimeString()}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </PageLayout>
    </>
  );
};

export default Admin;