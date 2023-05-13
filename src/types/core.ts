export interface IClient {
  name: string;
  surname: string;
  age: string;
  phone: string;
  id: string;
}

export interface ISignInForm {
  login: string;
  password: string;
}

export interface IAddClientForm {
  name: string;
  surname: string;
  date: number;
  phone: string;
}

export interface INewClient {
  name: string;
  surname: string;
  age: string;
  phone: string;
}

export interface IModalProps {
  onClose: () => void;
  isBigModal?: boolean;
}

export interface IClientModalProps extends IModalProps {
  client: IClient;
}
