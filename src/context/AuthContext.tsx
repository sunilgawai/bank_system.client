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

const AuthContext = createContext<any>({});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState({} as Auth);

    // useEffect(()=> {
    //     const data = localStorage.getItem('auth')
    //     if(data) {
    //         const _auth = JSON.parse(data);
    //         setAuth(_auth)
    //         // console.log('setAuth', _auth);
    //     }
    // }, [])

    // useEffect(() => {
    //     const _auth = JSON.stringify(auth);
    //     if(Object.keys(auth).length === 0) return;
    //     localStorage.setItem('auth', _auth);
    //     // console.log('setting auth init', auth);
    // }, [auth])

    return <AuthContext.Provider value={{
        auth,
        setAuth
    }}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);