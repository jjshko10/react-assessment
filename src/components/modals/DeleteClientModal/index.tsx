import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { useDeleteClientStyles } from './DeleteClient.styles';
import { ModalWrapper } from '../ModalWrapper';
import { IClientModalProps } from 'types/core';
import { CloseButton } from 'components/core/CloseButton';
import { useClientsContext } from 'contexts/ClientsContext';

export const DeleteClientModal: FC<IClientModalProps> = ({ client, onClose }) => {
  const classes = useDeleteClientStyles();
  const { deleteClient } = useClientsContext();
  
  return (
    <ModalWrapper onClose={onClose}>
      <Box className={classes.modalWrapper}>
        <Typography variant='h2' mb={5}>
          Delete
        </Typography>
        <Typography component='span' mb={5}>
          Are you sure you want to delete client?
        </Typography>
        <Button
          variant='contained'
          className={classes.button}
          onClick={() => deleteClient(client.id, onClose)}
        >
          Yes, delete
        </Button>
        <CloseButton text='No, close' onClose={onClose} width='75px' />
      </Box>
    </ModalWrapper>
  );
};
