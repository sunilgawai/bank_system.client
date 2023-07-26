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

// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountService from '../../services/AccountService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const location: {
  countries: any[];
  states: any[];
  cities: any[];
} = {
  countries: [],
  states: [],
  cities: []
}

const DepositeWithdraw = () => {
  const notify = (message: string) => toast(message);
  const { customer } = useAppSelector((state) => state.auth);
  // console.log('c', customer.account);

  if (!customer) {
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
            setStatus({ success: false });
            setSubmitting(true);
            console.log("values", values);
            if (values.action_type === "WITHDRAW") {
              AccountService.withdrawMoney(values.amount)
                .then((res) => {
                  console.log('res', res);
                  setStatus({ success: true });
                }).catch((err) => {
                  setStatus({ success: false });
                  console.log('err', err);
                })
            }

            if (values.action_type === "DEPOSITE") {
              AccountService.depositeMoney(values.amount)
                .then((res) => {
                  console.log('res', res);
                  setStatus({ success: true });
                }).catch((err) => {
                  setStatus({ success: false });
                  setErrors({ submit: err.response.data.message });
                  console.log('err', err);
                })
            }
            setSubmitting(false);
            // ApiService.storeCustomer(values)
            //   .then((response) => {
            //     // console.log("res", response);
            //     if (response.status === 200) {
            //       notify("Customer stored.");
            //       setSubmitting(false);
            //       setStatus({ success: true });
            //     }
            //     setSubmitting(false);
            //     resetForm();
            //   }).catch((err) => {
            //     // console.log(err);
            //     setStatus({ success: false });
            //     notify("error storing customer.");
            //     setErrors({ submit: err.response.data.message });
            //     setSubmitting(false);
            //   })

          }}
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
                      value={customer.account.account_type}
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
