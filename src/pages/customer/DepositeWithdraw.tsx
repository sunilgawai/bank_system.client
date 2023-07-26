/* eslint-disable no-unused-vars */

// material-ui
import { Button, Divider, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Select, MenuItem } from '@mui/material';
// third party
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../layout/PageLayout';
import ApiService from '../../services/ApiService';
import { useAppSelector } from '../../store/hooks';
import { useRevalidator } from "react-router-dom";


// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountService from '../../services/AccountService';
import { useEffect, useState } from 'react';
import { ICustomer } from '../../types';
import axios from 'axios';

const DepositeWithdraw = () => {
  const notify = (message: string) => toast(message);
  const [customer, setCustomer] = useState({} as ICustomer);

  useEffect(() => {
    AccountService.getMyProfile().then((res) => {
      if (res.status === 200) {
        setCustomer(res.data);
      }
      // console.log(res)
    }).catch((err) => {
      // console.log('err', err);
    })
  }, [customer?.account?.account_balance])
  if (Object.keys(customer).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <PageLayout>
        <Divider sx={{ mb: 4 }} />
        <ToastContainer />
        <Formik
          initialValues={{
            action_type: 'WITHDRAW',
            amount: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            action_type: Yup.string().max(255).required('Action required'),
            amount: Yup.string().required('Amount is required'),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
            console.log(values);
            setStatus({ success: false });
            setSubmitting(true);
            if (values.action_type === "WITHDRAW") {
              AccountService.withdrawMoney(values.amount)
                .then((res) => {
                  resetForm();
                  setCustomer({
                    ...customer,
                    account: {
                      ...customer.account,
                      account_balance: res.data.account.account_balance
                    }
                  });
                  notify(`${values.amount}rs withdrawal Successful.`);
                  // console.log('res', res);
                  setStatus({ success: true });
                }).catch((err) => {
                  setStatus({ success: false });
                  setErrors({ submit: err.response.data.message })
                  // console.log('err', err);
                })
            }

            if (values.action_type === "DEPOSITE") {
              console.log("in deposite")
              try {
                const response = await axios.post('http://localhost:4000/api/me/account/deposite', {
                  amount: values.amount
                }, {
                  withCredentials: true
                })
                console.log("response", response);
                if (response.status === 200) {
                  resetForm();
                  setCustomer({
                    ...customer,
                    account: {
                      ...customer.account,
                      account_balance: response.data.account.account_balance
                    }
                  });
                  console.log("res", response);
                  notify(`${values.amount} rs deposited Successful.`);
                  setStatus({ success: true });
                }
              } catch (error: any) {
                console.log(error);
                setStatus({ success: false });
                setErrors({ submit: error.response?.data?.message || 'Deposition failed.' });
              }
            }
          }
          }
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} px={12}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="middle_name">Account Type</InputLabel>
                    <OutlinedInput
                      id="middle_name"
                      type="middle_name"
                      value={customer?.account?.account_type}
                      name="middle_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="middle_name">Account Number</InputLabel>
                    <OutlinedInput
                      id="middle_name"
                      type="middle_name"
                      value={customer.account.account_number}
                      name="middle_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="middle_name">IFSC Code</InputLabel>
                    <OutlinedInput
                      id="middle_name"
                      type="middle_name"
                      value={customer.account.ifsc_code}
                      name="middle_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="first_name">Account Balance</InputLabel>
                    <OutlinedInput
                      id="document_number"
                      type="document_number"
                      value={customer.account.account_balance}
                      name="document_number"
                      onBlur={handleBlur}
                      placeholder="John"
                      readOnly={true}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="phone-signup">Document Name</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="phone-signup"
                      value={customer.document.document_type}
                      name="phone"
                      onBlur={handleBlur}
                      placeholder="Phone No."
                      inputProps={{}}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="phone-signup">Document Number</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="phone-signup"
                      value={customer.document.document_number}
                      name="phone"
                      onBlur={handleBlur}
                      placeholder="Phone No."
                      inputProps={{}}
                    />
                  </Stack>
                </Grid>
                <Divider color='black' />
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="amount">Amount</InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="amount"
                      value={values.amount}
                      onChange={handleChange}
                      name="amount"
                      onBlur={handleBlur}
                      placeholder="Amount"
                      inputProps={{}}
                    />
                    {touched.amount && errors.amount && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {errors.amount}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel id="action_type">Deposite/Withdraw*</InputLabel>
                    <Select
                      fullWidth
                      labelId="action_type"
                      id="action_type"
                      type="action_type"
                      name="action_type"
                      label="action_type"
                      onBlur={handleBlur}
                      error={Boolean(touched.action_type && errors.action_type)}
                      value={values.action_type}
                      onChange={handleChange}
                    >
                      <MenuItem value='WITHDRAW'>
                        WITHDRAW
                      </MenuItem>
                      <MenuItem value='DEPOSITE'>
                        DEPOSITE
                      </MenuItem>
                    </Select>
                    {touched.action_type && errors.action_type && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {errors.action_type}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>

                {errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {values.action_type}
                  </Button>
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

export default DepositeWithdraw;
