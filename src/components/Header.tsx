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
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '10px'
            }}>
            <Typography style={{ width: '10%' }}>
                <AccountBalanceOutlinedIcon fontSize='large' />
            </Typography>
            <Button
                component={Link} to="/login" variant='text' color='primary'>
                Login
            </Button>
            <Button
                component={Link} to="/about" variant='text' color='info'>
                About
            </Button>
        </Box>
    )
}

export default Header;