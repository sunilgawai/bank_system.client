/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
// material-ui
import { Button, Divider, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../layout/PageLayout';
import { useAppSelector } from '../../store/hooks';

const Customer = () => {
    const { customer } = useAppSelector((state) => state.auth);
    // console.log('c', customer);

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
                        customer: Yup.string().max(255).required('Customer is required'),
                    })}
                    onSubmit={async (formik) => { }}
                >
                    {({ errors, values, handleBlur, handleChange, touched }) => (
                        <form onSubmit={e => e.preventDefault()}>
                            <Grid container spacing={2} px={12}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="first_name">First Name*</InputLabel>
                                        <OutlinedInput
                                            id="document_number"
                                            type="document_number"
                                            value={values.first_name}
                                            name="document_number"
                                            onBlur={handleBlur}
                                            placeholder="John"
                                            readOnly={true}
                                        />
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
                                            fullWidth
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="last_name-signup">Last Name*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="last_name-signup"
                                            type="last_name"
                                            value={values.last_name}
                                            name="last_name"
                                            onBlur={handleBlur}
                                            placeholder="Doe"
                                            inputProps={{}}
                                            readOnly={true}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="phone-signup">Phone</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="phone-signup"
                                            value={values.phone}
                                            name="phone"
                                            onBlur={handleBlur}
                                            placeholder="Phone No."
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.email}
                                            name="email"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="date-of-birth">Date fo Birth*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.date_of_birth}
                                            name="date_of_birth"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="gender">Gender*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.gender}
                                            name="email"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel id="document-type">Document Type*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.document.document_type}
                                            name="email"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="document_number">Document No.*</InputLabel>
                                        <OutlinedInput
                                            id="document_number"
                                            type="document_number"
                                            value={values.document.document_number}
                                            name="document_number"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="John"
                                            readOnly={true}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel id="department-signup">Country</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.address.country}
                                            name="email"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel id="department-signup">State</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.address.state}
                                            name="email"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel id="department-signup">City</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.address.city}
                                            name="email"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel id="department-signup">District*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={values.address.district}
                                            name="email"
                                            onBlur={handleBlur}
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="landmark">Landmark</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="landmark"
                                            value={values.address.landmark}
                                            name="landmark"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Landmark"
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <Button
                                        disableElevation
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Update Details.
                                    </Button>
                                </Grid> */}
                            </Grid>
                        </form>
                    )}
                </Formik>
                <Divider sx={{ mt: 4 }} />
            </PageLayout>
        </>
    );
};

export default Customer;
