import {
  PropsWithChildren,
  createContext,
  useContext,
  useState
} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { IClient } from 'types/core';

interface IClientsContext {
  clients: IClient[];
  getClients (): Promise<void>;
  searchClients (value: string): void;
}

const ClientsContext = createContext<IClientsContext | undefined>(undefined);

export const ClientsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [allClients, setAllClients] = useState<IClient[]>([])
  const [clients, setClients] = useState<IClient[]>([]);

  const getClients = async () => {
    try {
      const response = await axios.get('http://localhost:3333/clients');
      setClients(response.data.clients);
      setAllClients(response.data.clients);
    } catch (error) {
      toast.error('Request failed');
    }
  };

  const searchClients = (value: string) => {
    const filteredClients = allClients.filter(client =>
      client.name.toLowerCase().includes(value.toLowerCase()) ||
      client.surname.toLowerCase().includes(value.toLowerCase())
    );
    setClients(filteredClients);
  };

  const value: IClientsContext = {
    clients,
    getClients,
    searchClients,
  };

  return <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>;
};

export function useClientsContext() {
  const context = useContext(ClientsContext);

  if (typeof context === 'undefined') {
    throw new Error('useClientsContext must be used within an ClientsProvider');
  }

  return context;
}
