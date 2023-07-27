import { Divider, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../layout/PageLayout';
import { useAppSelector } from '../../store/hooks';
import AccountService from '../../services/AccountService';
import { useEffect, useState } from 'react';

const Admin = () => {
  const { customer } = useAppSelector((state) => state.auth);

  const [details, setDetails] = useState({
    accounts: 0,
    customers: 0,
    documents: 0,
    transactions: 0
  })

  useEffect(() => {
    AccountService.getAllDetails().then((response) => {
      console.log(response);
      setDetails(response.data)
      console.log('details', details);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  if (!customer) {
    return <div>Loading...</div>
  }
  return (
    <>
      <PageLayout>
        <Divider sx={{ mb: 4 }} />
        {/* {JSON.stringify(auth)} */}
        <Formik
          initialValues={customer}
          validationSchema={Yup.object().shape({
            Admin: Yup.string().max(255).required('Admin is required'),
          })}
          onSubmit={async (formik) => { }}
        >
          {({ errors, values, handleBlur, handleChange, touched }) => (
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
      </PageLayout>
    </>
  );
};

export default Admin;