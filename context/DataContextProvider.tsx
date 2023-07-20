'use client';
import { ReactNode, useState } from 'react';
import DataContext, { DataContextType } from './DataContext';
import { DataType } from '@/components/table/Columns';

interface DataContextProviderProps {
  children: ReactNode;
}

const DataContextProvider = ({ children }: DataContextProviderProps) => {
  // Defina o estado e as funções de atualização dos dados do contexto
  const [data, setData] = useState<DataType[]>([{
    name: '',
    role: '',
    phone: '',
    salary: '',

  }]);


  const contextValue: DataContextType = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
