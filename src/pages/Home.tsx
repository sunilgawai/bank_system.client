import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const { auth } = useAuthContext();
  const navigate = useNavigate();
  if (!auth.isAuth) {
    navigate('/customer');
  }
  return (
    <div>
      <Header />
      <Box width={'100vw'} height={'100vh'} p={4}
        flex={1} flexDirection={'row'} alignItems={'center'}
        justifyContent={'center'}>
        <img style={{
          width: '50vw',
          height: '60%'
        }}
          src="/bank_img.jpg" alt="bank" />

        <Typography
          fontSize={40}
          fontStyle={'italic'}>
          Welcome to
        </Typography>
        <Typography
          fontSize={40}
          fontStyle={'italic'}>
          The Developer's Bank
        </Typography>
      </Box>
    </div>
  )
}

export default Home;