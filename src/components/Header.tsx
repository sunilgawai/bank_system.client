import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react'

const Header = () => {
    return (
        <Box
            style={{
                width: '100%',
                backgroundColor: 'royalblue',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Typography style={{ width: '100%' }}>
                <AccountBalanceOutlinedIcon fontSize='large' />
            </Typography>
            <Typography>
                About
            </Typography>
            <Link
                to="/customer"
            >
                customer
            </Link>
            <Link
                to="/admin"
            >
                admin
            </Link>
            <Link
                to="/login"
            >
                customer
            </Link>
        </Box>
    )
}

export default Header;