import {
  PropsWithChildren,
  createContext,
  useContext,
  useState
} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { IClient, INewClient } from 'types/core';
import { useAuthContext } from './AuthContext';

interface IClientsContext {
  clients: IClient[];
  getClients (): Promise<void>;
  searchClients (value: string): void;
  sortClients (value: string | null): void;
  addNewClient ({ name, surname, age, phone }: INewClient, onClose: () => void): Promise<void>;
  deleteClient (id: string, onClose: () => void): Promise<void>;
  editClient ({ name, surname, age, phone, id }: IClient, onClose: () => void): Promise<void>;
  sortFlag: boolean;
}

const ClientsContext = createContext<IClientsContext | undefined>(undefined);

export const ClientsProvider = ({ children }: PropsWithChildren<{}>) => {
  const [allClients, setAllClients] = useState<IClient[]>([])
  const [clients, setClients] = useState<IClient[]>([]);
  const [sortFlag, setSortFlag] = useState<boolean>(false);
  const { token } = useAuthContext();
  
  const config = {
    headers: { Authorization: token }
  };

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
        setClients(clients.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        ));
        setSortFlag(!sortFlag);
        break;
      case 'age': // create valid age values and it will work
        setClients(clients.sort((a, b) => Number(a.age) - Number(b.age)));
        setSortFlag(!sortFlag);
        break;
      default:
        break;
    }
  };

  const addNewClient = async (
    { name, surname, age, phone }: INewClient,
    onClose: () => void
  ) => {
    const client = {
      name: name,
      surname: surname,
      age: age,
      phone: phone,
    }
    try {
      await axios.post('http://localhost:3333/clients/add', client, config);
      toast.success('New client was added successfully');
      getClients();
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      onClose();
    }
  };

  const deleteClient = async (
    id: string,
    onClose: () => void
  ) => {
    try {
      await axios.delete(`http://localhost:3333/clients/remove?id=${id}`, config);
      toast.success('Client was deleted successfully');
      getClients();
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      onClose();
    }
  };

  const editClient = async (
    { name, surname, age, phone, id }: IClient,
    onClose: () => void
  ) => {
    const client = {
      name: name,
      surname: surname,
      age: age,
      phone: phone,
      id: id,
    }
    try {
      await axios.put(`http://localhost:3333/clients/edit`, client, config);
      toast.success('Client was edited successfully');
      getClients();
    } catch (error) {
      toast.error('Something went wrong!');
    } finally {
      onClose();
    }
  };

  const value: IClientsContext = {
    clients,
    getClients,
    searchClients,
    sortClients,
    addNewClient,
    deleteClient,
    editClient,
    sortFlag,
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
