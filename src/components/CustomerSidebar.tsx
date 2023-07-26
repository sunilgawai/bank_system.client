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
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
// Notification import.
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch } from '../store/hooks';
import { removeAuth } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const navigation_links = [
    {
        text: "Personal Details",
        to: "/customer"
    },
    {
        text: "Account Details",
        to: "/customer/account"
    },
    {
        text: "Account Statements",
        to: "/customer/statements"
    },
    {
        text: "Transaction History",
        to: "/customer/transactions"
    },
    {
        text: "Deposite/Withdraw Money",
        to: "/customer/deposite/withdraw"
    },
    {
        text: "Send/Recieve Money",
        to: "/customer/send/recieve"
    },
    {
        text: "Change Password.",
        to: "/customer/password"
    },
    // {
    //     text: "Logout",
    //     to: "/"
    // }
]

const CustomerSidebar = () => {
    const notify = (message: string) => toast(message);
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
            <ToastContainer />
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
                    <ListItem button disablePadding>
                        <ListItemButton onClick={() => {
                            ApiService.logout()
                                .then((res) => {
                                    console.log(res);
                                    if (res.status === 200) {
                                        notify('Logged out successfully');
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
                </List>
                {/* <Divider /> */}
                {/* <List>
                    {['Profile', 'Account', 'Transactions', 'Statements'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> */}
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

export default CustomerSidebar;
