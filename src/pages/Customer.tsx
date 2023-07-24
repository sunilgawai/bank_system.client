import {
  Paper,
  Container,
  Typography
} from '@mui/material';

const Customer = () => {
  return (
    <Container component="div" style={{ border: '1px solid gray', width: '100%', height: '98vh' }}>
      <Paper style={{ border: '1px solid gray', padding: '10px' }}>
        <Typography>Personal Details</Typography>
      </Paper>
      Customer
    </Container>
  )
}

export default Customer;