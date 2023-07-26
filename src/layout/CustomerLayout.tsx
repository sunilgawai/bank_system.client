import { useOutlet, useNavigate } from 'react-router-dom';
import CustomerSidebar from '../components/CustomerSidebar';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';

const CustomerLayout = () => {
    const navigate = useNavigate();
    const { role, isAuthenticated } = useAppSelector((state) => state.auth);
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
        if (isAuthenticated && role === 'admin') {
            navigate('/admin');
        }
    }, [isAuthenticated, role, navigate])
    return (
        <Box sx={{ display: 'flex' }}>
            <CustomerSidebar />
            {/* CustomerLayout */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1 }}>
                {useOutlet()}
            </Box>
        </Box>
    )
}

export default CustomerLayout;