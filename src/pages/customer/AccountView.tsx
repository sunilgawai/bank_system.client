import { Divider, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PageLayout from '../../layout/PageLayout';
import { useAppSelector } from '../../store/hooks';

const AccountView = () => {
    const { customer } = useAppSelector((state) => state.auth);
    // console.log('c', customer.account);

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
                        AccountView: Yup.string().max(255).required('AccountView is required'),
                    })}
                    onSubmit={async (formik) => { }}
                >
                    {({ errors, values, handleBlur, handleChange, touched }) => (
                        <form onSubmit={e => e.preventDefault()}>
                            <Grid container spacing={2} px={12}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="middle_name">Account Type</InputLabel>
                                        <OutlinedInput
                                            id="middle_name"
                                            type="middle_name"
                                            value={values.account.account_type}
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
                                            value={values.account.account_number}
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
                                            value={values.account.ifsc_code}
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
                                            value={values.account.account_balance}
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
                                            value={values.document.document_type}
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
                                            value={values.document.document_number}
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

export default AccountView;
