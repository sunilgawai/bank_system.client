import { useNavigate, useOutlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import AdminSidebar from '../components/AdminSidebar';
import { useAppSelector } from '../store/hooks';
const AdminLayout = () => {
    const navigate = useNavigate();
    const { role, isAuthenticated, access_token } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
        if (isAuthenticated && role === 'customer') {
            navigate('/customer');
        }
    }, [isAuthenticated, role, navigate])

    return (
        <Box sx={{ display: 'flex' }}>
            <AdminSidebar />
            {JSON.stringify(access_token)}
            {/* CustomerLayout */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1 }}>
                {useOutlet()}
            </Box>
        </Box>
    )
}

export default AdminLayout;