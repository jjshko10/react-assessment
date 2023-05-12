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
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    let login = localStorage.getItem('login');

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
      setUsername(response.data.login);
      setIsLogged(true);
      onClose();
    } catch (error) {
      toast.error('Login Failed');
    }
  };

  const logout = (onClose: () => void) => {
    localStorage.removeItem('login');
    setUsername(undefined);
    setIsLogged(false);
    onClose();
  };

  const value: IAuthContext = {
    isLogged,
    login,
    logout,
    username,
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
