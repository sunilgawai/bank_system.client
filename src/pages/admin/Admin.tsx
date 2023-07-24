import {
  Paper,
  Container,
  Typography
} from '@mui/material';

const Admin = () => {
  return (
    <Container component="div" style={{ border: '1px solid gray', width: '100%', height: '98vh' }}>
      <Paper style={{ border: '1px solid gray', padding: '10px' }}>
        <Typography>Admin Home</Typography>
      </Paper>
      Admin
    </Container>
  )
}

export default Admin;