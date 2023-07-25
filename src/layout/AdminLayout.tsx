import { useNavigate, useOutlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AdminSidebar from '../components/AdminSidebar';
import { useAuthContext } from '../context/AuthContext';

const AdminLayout = () => {
    const { auth } = useAuthContext();
    const navigate = useNavigate();
    if (!auth.isAuth) {
        navigate('/customer');
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <AdminSidebar />
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