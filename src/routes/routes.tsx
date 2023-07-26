import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CustomerLayout from "../layout/CustomerLayout";
import AdminLayout from "../layout/AdminLayout";
import Customer from "../pages/customer/Customer";
import Admin from "../pages/admin/Admin";
import About from "../pages/About";
import Update from "../pages/admin/users/Update";
import Transactions from "../pages/admin/transactions/Transactions";
import Statements from "../pages/customer/Statements";
import Users from "../pages/admin/users/Users";
import Create from "../pages/admin/users/Create";
import Login from "../pages/Login";
import View from "../pages/admin/users/View";
import Accounts from "../pages/admin/accounts/Accounts";
import AccountView from "../pages/customer/AccountView";
import ProfileView from "../pages/customer/ProfileView";
import AccountUpdate from "../pages/admin/accounts/AccountUpdate";
import AccountTransactions from "../pages/customer/AccountTransactions";
import SendRecieve from "../pages/customer/SendRecieve";
import DepositeWithdraw from "../pages/customer/DepositeWithdraw";

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
                path: 'account',
                element: <AccountView />
            },
            {
                path: 'statements',
                element: <Statements />
            },
            {
                path: 'transactions',
                element: <AccountTransactions />
            },
            {
                path: 'deposite/withdraw',
                element: <DepositeWithdraw />
            },
            {
                path: 'send/recieve',
                element: <SendRecieve />
            }   ,
            {
                path: 'profile',
                element: <ProfileView />
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
                path: 'create',
                element: <Create />
            },
            {
                path: 'accounts',
                element: <Accounts />
            },
            {
                path: 'accounts/:id',
                element: <AccountView />
            },
            {
                path: 'accounts/update/:id',
                element: <AccountUpdate />
            },
            {
                path: 'transactions',
                element: <Transactions />
            }
        ]
    }
]);