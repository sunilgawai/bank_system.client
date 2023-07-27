/* eslint-disable no-unused-vars */

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
import ApiService from '../../../services/ApiService';

// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initCustomerData = {
  first_name: '',
  middle_name: '',
  last_name: '',
  phone: '',
  email: '',
  date_of_birth: '',
  gender: '',
  document_type: '',
  document_number: '',
  state: '',
  city: '',
  district: '',
  landmark: '',
  account_type: '',
  account_balance: '',
  submit: ''
}

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

const Create = () => {
  const notify = (message: string) => toast(message);

  return (
    <>
      <PageLayout>
        <Divider sx={{ mb: 4 }} />
        <ToastContainer />
        <Formik
          initialValues={initCustomerData}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().max(255).required('First Name is required'),
            middle_name: Yup.string().max(255).required('Middle Name is required'),
            last_name: Yup.string().max(255).required('Last Name is required'),
            phone: Yup.string().min(10).max(10).required('Phone No. is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
            date_of_birth: Yup.string().required('Date of Birth is required'),
            gender: Yup.string().max(255).required('Gender is required'),
            document_type: Yup.string().max(255).required('Document type is required'),
            document_number: Yup.string().min(10).max(12).required('Document No. is required'),
            state: Yup.string().max(255).required('State is required'),
            city: Yup.string().max(255).required('City is required'),
            district: Yup.string().max(255).required('District is required'),
            landmark: Yup.string().max(255).required('Landmark is required'),
            account_type: Yup.string().max(255).required('Account type is required'),
            account_balance: Yup.string().max(255).required('Account balance is required')
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
            setStatus({ success: true });
            console.log("values", values)
            ApiService.storeCustomer(values)
              .then((response) => {
                // console.log("res", response);
                if (response.status === 200) {
                  notify("Customer stored.");
                  setSubmitting(false);
                  setStatus({ success: true });
                }
                setSubmitting(false);
                resetForm();
              }).catch((err) => {
                // console.log(err);
                setStatus({ success: false });
                notify("error storing customer.");
                setErrors({ submit: err.response.data.message });
                setSubmitting(false);
              })

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
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="date-of-birth">Date fo Birth*</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date Of Birth"
                        value={values.date_of_birth}
                        onChange={(newValue) => {
                          const formattedDate = dayjs(newValue).format('DD-MM-YYYY');
                          // console.log("DOB", { formattedDate, newValue })
                          setFieldValue('date_of_birth', formattedDate); // Set the selected date using setFieldValue
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
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                      <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    {touched.gender && errors.gender && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.gender}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel id="document_type">Document Type*</InputLabel>
                    <Select
                      fullWidth
                      labelId="document_type"
                      id="document_type"
                      type="document_type"
                      name="document_type"
                      label="document_type"
                      onBlur={handleBlur}
                      error={Boolean(touched.document_type && errors.document_type)}
                      value={values.document_type}
                      onChange={handleChange}
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
                        {errors.document_type}
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
                        {errors.document_number}
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
                        haveli
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
                    Create Account
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

export default Create;
