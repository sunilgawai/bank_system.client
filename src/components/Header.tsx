import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box
            style={{
                width: '100%',
                backgroundColor: 'lightgray',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 50px',
            }}>
            <Typography style={{ width: '10%' }}>
                <AccountBalanceOutlinedIcon fontSize='large' />
            </Typography>
            <div>
                <Button
                    component={Link} to="/login" variant='text' color='success'>
                    Login
                </Button>
                <Button
                    component={Link} to="/about" variant='text' color='success'>
                    About
                </Button>
            </div>
        </Box>
    )
}

export default Header;