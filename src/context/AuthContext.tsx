import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface Auth {
    user: {
        role: string;
    }
    isAuth: boolean;
};
interface AuthContextProps {
    auth: Auth
    setAuth: React.Dispatch<React.SetStateAction<Auth>>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState({
        user: { role: 'admin' },
        isAuth: true
    });

    useEffect(() => {
        // check if there is user.
        // const auth = window.localStorage.getItem('auth')
        //     ? JSON.parse(window.localStorage.getItem('auth'))
        //     : { user: { role: 'customer' } }
    })

    return <AuthContext.Provider value={{
        auth,
        setAuth
    }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);