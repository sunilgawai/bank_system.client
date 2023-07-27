/* eslint-disable no-unused-vars */
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// material-ui
import { Button, Divider, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../../layout/PageLayout';
import { ICustomer } from '../../../types';
import ApiService from '../../../services/ApiService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const View = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState<ICustomer>({} as ICustomer);
    useEffect(() => {
        if (!id) return;
        ApiService.viewCustomer(id).then((response) => {
            // console.log("customer", response.data);
            if (response.status === 200) {
                setCustomer(response.data);
            }
        }).catch((err) => {
            // notify('error loading customer.');
            console.log("err", err)
        })
    }, [])

    return (
        <>
            <PageLayout>
                <Button color='success' size='large' variant='outlined'>
                    <Link to='/admin/customers'>Go Back</Link>
                </Button>
                <Divider sx={{ mb: 4 }} />
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
                        document_type: customer?.document?.document_type || '',
                        document_number: customer?.document?.document_number || '',
                        state: customer.address.state || '',
                        city: customer.address.city || '',
                        district: customer.address.district || '',
                        landmark: customer.address.landmark || '',
                        account_type: customer.account.account_type || '',
                        account_balance: customer.account.account_balance || '',
                        submit: ''
                    }}
                    validationSchema={Yup.object().shape({
                        customer: Yup.string().max(255).required('Customer is required'),
                    })}
                    onSubmit={async (formik) => { }}
                >
                    {({ errors, handleBlur, handleChange, touched }) => (
                        <form onSubmit={e => e.preventDefault()}>
                            <Grid container spacing={2} px={12}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="first_name">First Name*</InputLabel>
                                        <OutlinedInput
                                            id="document_number"
                                            type="document_number"
                                            value={'First Name'}
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
                                            value={'Middle Name'}
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
                                            value={'Last Name'}
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
                                            value={'Phone No.'}
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
                                            value={'Email'}
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
                                            value={'30/09/2001'}
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
                                        <InputLabel htmlFor="gender">Gender*</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={'Gender'}
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
                                            value={'Document Type'}
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
                                            value={'Document No.'}
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
                                            value={'India'}
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
                                            value={'Maharashtra'}
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
                                            value={'City'}
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
                                            value={'District'}
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
                                            value={'Landmark'}
                                            name="landmark"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Landmark"
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel id="account_type">Account Type</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="email-login"
                                            type="email"
                                            value={'Account Type'}
                                            name="email"
                                            placeholder="demo@phone.com"
                                            readOnly={true}
                                            inputProps={{}}
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="account_balance">Account Balance</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            id="account_balance"
                                            value={'9999.56'}
                                            name="account_balance"
                                            placeholder="Account Balance"
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

export default View;
