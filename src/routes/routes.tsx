import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CustomerLayout from "../layout/CustomerLayout";
import AdminLayout from "../layout/AdminLayout";
import Customer from "../pages/Customer";
import Admin from "../pages/admin/Admin";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Update from "../pages/admin/Update";
import Transactions from "../pages/admin/Transactions";
import Statements from "../pages/Statements";
import Users from "../pages/admin/Users";
import Create from "../pages/admin/Create";
import Login from "../pages/Login";
import View from "../pages/admin/View";
import Accounts from "../pages/admin/Accounts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/customer',
        element: <CustomerLayout />,
        children: [
            {
                index: true,
                element: <Customer />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'account',
                element: <Account />
            },
            {
                path: 'update',
                element: <Update />
            },
            {
                path: 'transactions',
                element: <Transactions />
            },
            {
                path: 'statements',
                element: <Statements />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Admin />
            },
            {
                path: 'customers',
                element: <Users />,
            },
            {
                path: 'customers/:id',
                index: false,
                element: <View />
            },
            {
                path: 'customers/update/:id',
                element: <Update />
            },
            {
                path: 'customers/edit/:id',
                element: <div>Edit Customer</div>
            },
            {
                path: 'create',
                element: <Create />
            },
            {
                path: 'accounts',
                element: <Accounts />
            },
            {
                path: 'transactions',
                element: <Transactions />
            }
        ]
    }
]);