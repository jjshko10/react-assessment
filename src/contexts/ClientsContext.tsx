import {
  PropsWithChildren,
  createContext,
  useContext,
  useState
} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { IClient, INewClient } from 'types/core';

interface IClientsContext {
  clients: IClient[];
  getClients (): Promise<void>;
  searchClients (value: string): void;
  sortClients (value: string | null): void;
  addNewClient ({ name, surname, age, phone }: INewClient): Promise<void>;
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
      toast.error('Something went wrong!');
    }
  };

  const searchClients = (value: string) => {
    const filteredClients = allClients.filter(client =>
      client.name.toLowerCase().includes(value.toLowerCase()) ||
      client.surname.toLowerCase().includes(value.toLowerCase())
    );
    setClients(filteredClients);
  };

  const sortClients = (value: string | null) => {
    if (!value) {
      return;
    }

    switch (value.toLowerCase()) {
      case 'name':
        const sortedClients = clients.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setClients(sortedClients);
        break;
      default:
        break;
    }
  };

  const addNewClient = async ({ name, surname, age, phone }: INewClient) => {
    try {
      await axios.post('http://localhost:3333/clients/add', {
        name, surname, age, phone
      });
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  const value: IClientsContext = {
    clients,
    getClients,
    searchClients,
    sortClients,
    addNewClient,
  };

  return <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>;
};

export function useClientsContext() {
  const context = useContext(ClientsContext);

  if (typeof context === 'undefined') {
    throw new Error('useClientsContext must be used within an ClientsProvider');
  }

  return context;
};
