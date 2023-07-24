import { useOutlet } from 'react-router-dom';
import CustomerSidebar from '../components/CustomerSidebar';
import { Box } from '@mui/material';

const CustomerLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CustomerSidebar />
            {/* CustomerLayout */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1}}>
                {useOutlet()}
            </Box>
        </Box>
    )
}

export default CustomerLayout;