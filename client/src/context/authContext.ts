import { createContext, useContext } from "react";

export const AuthContext = createContext<{
    user: any
    authStatus: boolean;
    setAuthStatus: (status: boolean) => void;
}>({
    user: null,
    authStatus: false,
    setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => {
    const data = useContext(AuthContext);
    return data;
}
