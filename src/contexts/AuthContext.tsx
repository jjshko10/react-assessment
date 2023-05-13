import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { ISignInForm } from 'types/core';

interface IAuthContext {
  isLogged: boolean;
  login (user: ISignInForm, onClose: () => void): Promise<void>;
  logout: (onClose: () => void) => void;
  username: string | undefined;
  token: string | null;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [token, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    let login = localStorage.getItem('login');
    let tokenValue = localStorage.getItem('token');
    setToken(tokenValue);

    if (!!login) {
      setUsername(login);
      setIsLogged(true);
    } else {
      setUsername(undefined);
      setIsLogged(false);
    }
  }, []);

  const login = async (user: ISignInForm, onClose: () => void) => {
    try {
      const response = await axios.post('http://localhost:3333/user/login', user);
      localStorage.setItem('login', response.data.login);
      localStorage.setItem('token', response.data.token);
      setUsername(response.data.login);
      setToken(response.data.token);
      setIsLogged(true);
      onClose();
    } catch (error) {
      toast.error('Login failed');
    }
  };

  const logout = (onClose: () => void) => {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
    setUsername(undefined);
    setToken(null);
    setIsLogged(false);
    onClose();
  };

  const value: IAuthContext = {
    isLogged,
    login,
    logout,
    username,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (typeof context === 'undefined') {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};
