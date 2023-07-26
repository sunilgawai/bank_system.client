/* eslint-disable no-unused-vars */

// material-ui
import { Button, Divider, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Select, MenuItem } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../layout/PageLayout';
import ApiService from '../../services/ApiService';

// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Password = () => {
  const notify = (message: string) => toast(message);

  return (
    <>
      <PageLayout>
        <Divider sx={{ mb: 4 }} />
        <ToastContainer />
        <Formik
          initialValues={{
            old_password: '',
            new_password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            old_password: Yup.string().max(255).required('Old password is required'),
            new_password: Yup.string().max(255).required('New password is required')
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
            setStatus({ success: true });
            console.log("values", values)
            const { old_password, new_password } = values;
            ApiService.resetPassword({ old_password, new_password })
              .then((response) => {
                // console.log("res", response);
                if (response.status === 200) {
                  notify("Password changed.");
                  setSubmitting(false);
                  setStatus({ success: true });
                }
                setSubmitting(false);
                resetForm();
              }).catch((err) => {
                // console.log(err);
                setStatus({ success: false });
                notify("error reseting password.");
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
                    <InputLabel htmlFor="old_password">Old Password*</InputLabel>
                    <OutlinedInput
                      id="old_password"
                      type="old_password"
                      value={values.old_password}
                      name="old_password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="old_password"
                      fullWidth
                      error={Boolean(touched.old_password && errors.old_password)}
                    />
                    {touched.old_password && errors.old_password && (
                      <FormHelperText error id="helper-text-first_name-signup">
                        {errors.old_password}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="new_password">New Password*</InputLabel>
                    <OutlinedInput
                      id="new_password"
                      type="new_password"
                      value={values.new_password}
                      name="new_password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="new_password"
                      fullWidth
                      error={Boolean(touched.new_password && errors.new_password)}
                    />
                    {touched.new_password && errors.new_password && (
                      <FormHelperText error id="helper-text-first_name-signup">
                        {errors.new_password}
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
                    Change Password
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

export default Password;
