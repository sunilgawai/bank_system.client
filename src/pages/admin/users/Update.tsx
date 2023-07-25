/* eslint-disable no-unused-vars */
import { useState } from 'react';

// material-ui
import { Button, Divider, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Select, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

// third party
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../../layout/PageLayout';
import { Link, useParams } from 'react-router-dom';
import ApiService from '../../../services/ApiService';
import { useEffect } from 'react';
import { ICustomer } from '../../../types';
// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Update = () => {
  const notify = (message: string) => toast(message);
  const [customer, setCustomer] = useState<ICustomer>({} as ICustomer);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    ApiService.viewCustomer(id).then((response) => {
      console.log("customer", response.data);
      if (response.status === 200) {
        setCustomer(response.data);
      }
    }).catch((err) => {
      notify('error loading customer.');
      console.log("err", err)
    })
  }, [])

  console.log("customer", customer);
  if (Object.keys(customer).length === 0) {
    return <div>Loading</div>
  }
  return (
    <>
      <PageLayout>
        <Button color='success' size='large' variant='outlined'>
          <Link to='/admin/customers'>Go Back</Link>
        </Button>
        <Divider sx={{ mb: 2 }} />
        <ToastContainer />
        <Formik
          initialValues={{
            id: id,
            first_name: customer.first_name,
            middle_name: customer.middle_name || '',
            last_name: customer.last_name || '',
            phone: customer.phone || '',
            email: customer.email || '',
            date_of_birth: customer.date_of_birth || '',
            gender: customer.gender || '',
            document_type: customer.document.document_type || '',
            document_number: customer.document.document_number || '',
            state: customer.address.state || '',
            city: customer.address.city || '',
            district: customer.address.district || '',
            landmark: customer.address.landmark || '',
            account_type: customer.account.account_type || '',
            account_balance: customer.account.account_balance || '',
            submit: ''
          }}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().max(255).required('First Name is required'),
            middle_name: Yup.string().max(255).required('Middle Name is required'),
            last_name: Yup.string().max(255).required('Last Name is required'),
            phone: Yup.string().max(12).required('Phone No. is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            date_of_birth: Yup.string().required('Date of Birth is required'),
            gender: Yup.string().max(255).required('Gender is required'),
            document_type: Yup.string().max(255).required('Document type is required'),
            document_number: Yup.string().max(255).required('Document No. is required'),
            state: Yup.string().max(255).required('State is required'),
            city: Yup.string().max(255).required('City is required'),
            district: Yup.string().max(255).required('District is required'),
            landmark: Yup.string().max(255).required('Landmark is required'),
            account_type: Yup.string().max(255).required('Account type is required'),
            account_balance: Yup.string().max(255).required('Account balance is required')
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
            try {
              setStatus({ success: true });
              console.log("values", values)
              const results = await ApiService.updateCustomer(values);
              console.log("results", results);
              if (results.status === 200) {
                notify("Customer data updated.")
                setSubmitting(false);
                // resetForm();
                setStatus({ success: true });
                setSubmitting(false);
              }
              resetForm();
            } catch (err) {
              console.log("error in update", err);
              setStatus({ success: false });
              setErrors({ submit: 'response.data.message' });
              setSubmitting(false);
            }
          }}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, setFieldValue, isSubmitting, touched, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} px={12}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="first_name">First Name*</InputLabel>
                    <OutlinedInput
                      id="first_name"
                      type="first_name"
                      value={values.first_name}
                      name="first_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John"
                      fullWidth
                      error={Boolean(touched.first_name && errors.first_name)}
                    />
                    {touched.first_name && errors.first_name && (
                      <FormHelperText error id="helper-text-first_name-signup">
                        {errors.first_name}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="middle_name">Middle Name*</InputLabel>
                    <OutlinedInput
                      id="middle_name"
                      type="middle_name"
                      value={values.middle_name}
                      name="middle_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John"
                      fullWidth
                      error={Boolean(touched.middle_name && errors.middle_name)}
                    />
                    {touched.middle_name && errors.middle_name && (
                      <FormHelperText error id="helper-text-first_name-signup">
                        {errors.middle_name}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="last_name-signup">Last Name*</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.last_name && errors.last_name)}
                      id="last_name-signup"
                      type="last_name"
                      value={values.last_name}
                      name="last_name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Doe"
                      inputProps={{}}
                    />
                    {touched.last_name && errors.last_name && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {errors.last_name}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="phone-signup">Phone</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.phone && errors.phone)}
                      id="phone-signup"
                      value={values.phone}
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Phone No."
                      inputProps={{}}
                    />
                    {touched.phone && errors.phone && (
                      <FormHelperText error id="helper-text-phone-signup">
                        {errors.phone}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      id="email-login"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="demo@phone.com"
                      inputProps={{}}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                {/* Date Of Birth */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="date-of-birth">Date fo Birth*</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date Of Birth"
                        value={values.date_of_birth}
                        onChange={(newValue) => {
                          // const formattedDate = dayjs(newValue).format('DD-MM-YYYY');
                          // console.log("DOB", { formattedDate, newValue })
                          setFieldValue('date_of_birth', '30/09/2001'); // Set the selected date using setFieldValue
                        }}
                      />
                    </LocalizationProvider>
                    {touched.date_of_birth && errors.date_of_birth && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.date_of_birth}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="gender">Gender*</InputLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel checked={values.gender === 'FEMALE'} value="FEMALE" control={<Radio />} label="Female" />
                      <FormControlLabel checked={values.gender === 'MALE'} value="MALE" control={<Radio />} label="Male" />
                      <FormControlLabel checked={values.gender === 'OTHER'} value="OTHER" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {touched.date_of_birth && errors.date_of_birth && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.date_of_birth}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel id="document-type">Document Type*</InputLabel>
                    <Select
                      fullWidth
                      labelId="document-type"
                      id="document-type"
                      type="document-type"
                      name="document-type"
                      label="document-type"
                      onBlur={handleBlur}
                      error={Boolean(touched.document_type && errors.document_type)}
                      value={values.document_type}
                    >
                      <MenuItem value='AADHAR'>
                        AADHAR
                      </MenuItem>
                      <MenuItem value='PANCARD'>
                        PANCARD
                      </MenuItem>
                      <MenuItem value='LICENSE'>
                        LICENSE
                      </MenuItem>
                    </Select>
                    {touched.document_type && errors.document_type && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {/* {errors.document_type} */}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="document_number">Document No.*</InputLabel>
                    <OutlinedInput
                      id="document_number"
                      type="document_number"
                      value={values.document_number}
                      name="document_number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John"
                      fullWidth
                      error={Boolean(touched.document_number && errors.document_number)}
                    />
                    {touched.document_number && errors.document_number && (
                      <FormHelperText error id="helper-text-first_name-signup">
                        {/* {errors.document_number} */}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel id="department-signup">State</InputLabel>
                    <Select
                      fullWidth
                      labelId="state-signup"
                      id="state-signup"
                      type="state"
                      name="state"
                      label="state"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        // ApiService.getCities(e.target.value)
                        //   .then((response) => {
                        //     setLocation({
                        //       ...location,
                        //       cities: response.data
                        //     });
                        //   })
                        //   .catch((errors) => {
                        //     console.log(errors);
                        //   });
                      }}
                      value={values.state}
                      error={Boolean(touched.state && errors.state)}
                    >
                      {/* {location.states.map((state) => (
                      <MenuItem key={state.id} value={state.id}>
                        {state.name}
                      </MenuItem>
                    ))} */}
                      <MenuItem value='maharashtra'>
                        Maharashtra
                      </MenuItem>
                    </Select>
                    {touched.state && errors.state && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {errors.state}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel id="department-signup">City</InputLabel>
                    <Select
                      fullWidth
                      labelId="city-signup"
                      id="city-signup"
                      type="city"
                      name="city"
                      label="city"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.city}
                      error={Boolean(touched.city && errors.city)}
                    >
                      {/* {location.cities.map((city: object) => (
                      <MenuItem key={city.id} value={city.id}>
                        {city.name}
                      </MenuItem>
                    ))} */}
                      <MenuItem value='pune'>
                        Pune
                      </MenuItem>
                    </Select>
                    {touched.city && errors.city && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {errors.city}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel id="department-signup">District*</InputLabel>
                    <Select
                      fullWidth
                      labelId="district"
                      id="signup"
                      type="district"
                      name="district"
                      label="district"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.district}
                      error={Boolean(touched.district && errors.district)}
                    >
                      {/* {location.cities.map((city: object) => (
                      <MenuItem key={city.id} value={city.id}>
                        {city.name}
                      </MenuItem>
                    ))} */}
                      <MenuItem value='haveli'>
                        bhosari
                      </MenuItem>
                    </Select>
                    {touched.district && errors.district && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {errors.district}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="landmark">Landmark</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.landmark && errors.landmark)}
                      id="landmark"
                      value={values.landmark}
                      name="landmark"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Landmark"
                      inputProps={{}}
                    />
                    {touched.landmark && errors.landmark && (
                      <FormHelperText error id="helper-text-phone-signup">
                        {errors.landmark}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel id="account_type">Account Type</InputLabel>
                    <Select
                      fullWidth
                      labelId="account_type"
                      id="account_type"
                      type="account_type"
                      name="account_type"
                      label="Account Type"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.account_type}
                      error={Boolean(touched.account_type && errors.account_type)}
                    >
                      <MenuItem value='CURRENT'>
                        CURRENT
                      </MenuItem>
                      <MenuItem value='SAVINGS'>
                        SAVINGS
                      </MenuItem>
                      <MenuItem value='SALARY'>
                        SALARY
                      </MenuItem>
                    </Select>
                    {touched.account_type && errors.account_type && (
                      <FormHelperText error id="helper-text-last_name-signup">
                        {errors.account_type}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="account_balance">Account Balance</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.account_balance && errors.account_balance)}
                      id="account_balance"
                      value={values.account_balance}
                      name="account_balance"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Account Balance"
                      inputProps={{}}
                    />
                    {touched.account_balance && errors.account_balance && (
                      <FormHelperText error id="helper-text-phone-signup">
                        {errors.account_balance}
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
                    Update Customer
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </PageLayout>
    </>
  );
};

export default Update;
