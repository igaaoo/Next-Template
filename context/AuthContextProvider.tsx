'use client';
import { ReactNode, useEffect, useState } from 'react';
import AuthContext, { AuthContextType } from './AuthContext';
import { redirect } from 'next/navigation';
import { sessionName, sessionExpires } from '@/config/session';

import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';

interface AuthContextProviderProps {
  children: ReactNode;
  // Outras propriedades que você queira passar para o provedor de contexto
}

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // Defina o estado e as funções de atualização dos dados do contexto
  const [token, setToken] = useState('');


  const login = (token: string) => {
    setToken(token);
    setCookie(sessionName, token, { maxAge: sessionExpires });
  };

  const logout = () => {
    deleteCookie('tokenTemplate');
    setToken('');
  };



  const contextValue: AuthContextType = {
    token,
    login,
    logout,
  };


  useEffect(() => {

    if (hasCookie(sessionName)) {
      login(getCookie(sessionName)!.toString());
    } else {
      if (window.location.pathname != '/login') {
        redirect('/login');
      }
    }

  }, []);


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
