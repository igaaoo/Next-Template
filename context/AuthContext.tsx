import { createContext, useContext } from 'react';


export interface AuthContextType {
  // Tipos dos dados 
  user: string;
  token: string;
  role: string;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext deve ser usado dentro de um provedor authContext');
  }
  return context;
};

export default AuthContext;
