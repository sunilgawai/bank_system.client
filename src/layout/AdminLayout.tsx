import { useOutlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AdminSidebar from '../components/AdminSidebar';

const AdminLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AdminSidebar />
            {/* CustomerLayout */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1}}>
                {useOutlet()}
            </Box>
        </Box>
    )
}

export default AdminLayout;