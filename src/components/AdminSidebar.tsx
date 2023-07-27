import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';
import { useAppDispatch } from '../store/hooks';
import { removeAuth } from '../store/authSlice';

const drawerWidth = 240;
const navigation_links = [
    {
        text: "Home",
        to: "/admin"
    },
    {
        text: "Customers",
        to: "/admin/customers"
    },
    {
        text: "Accounts",
        to: "/admin/accounts"
    },
    {
        text: "Transactions",
        to: "/admin/transactions"
    },
    {
        text: "Create Account",
        to: "/admin/create"
    },
    // {
    //     text: "Other",
    //     to: "/admin/other"
    // }
]

const AdminSidebar = () => {
    // const notify = (message: string) => toast(message);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar >
                    <Typography>
                        Bank Of Developers
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        navigation_links.map((link, idx) => (
                            <ListItem key={link.text} button component={Link} to={link.to} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {idx % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={link.text} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
                <ListItem button disablePadding>
                    <ListItemButton onClick={() => {
                        ApiService.logout()
                            .then((res) => {
                                console.log(res);
                                if (res.status === 200) {
                                    // notify('Logged out successfully');
                                    dispatch(removeAuth());
                                    navigate('/login');
                                }
                            }).catch((err) => {
                                console.log(err);
                            })
                    }}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1 }}
            >
                {/* <Toolbar /> */}
            </Box>
        </Box>
    );
}

export default AdminSidebar;
