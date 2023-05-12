import { FC, JSXElementConstructor, PropsWithChildren, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { ModalProvider } from 'react-modal-hook';
import { theme } from '../styles/theme';


interface ComposeProps {
  components: JSXElementConstructor<PropsWithChildren<any>>[];
  children: ReactNode;
}

const Compose: FC<ComposeProps> = (props) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, ComponentItem) => {
        return <ComponentItem>{acc}</ComponentItem>;
      }, children)}
    </>
  );
};

const SingletonProviders = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <Compose
        components={[
          ModalProvider,
        ]}
      >
        {children}
      </Compose>
    </ThemeProvider>
  );
};

export default SingletonProviders;
