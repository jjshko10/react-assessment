import { FC } from 'react';
import { useModal } from 'react-modal-hook';
import { Box } from '@mui/material';

import { ModalWrapper } from '../ModalWrapper';
import { IClientModalProps } from 'types/core';
import { useClientModalStyles } from './ClientModal.styles';
import { ClientInfo } from 'components/core/ClientInfo';
import { CloseButton } from 'components/core/CloseButton';
import { Avatar } from 'components/core/Avatar';
import { EditClientModal } from '../EditClientModal';
import { DeleteClientButton } from 'components/core/DeleteClientButton';

export const ClientModal: FC<IClientModalProps> = ({ onClose, client }) => {
  const classes = useClientModalStyles();
  const [showEditClientModal, hideEditClientModal] = useModal(() => (
    <EditClientModal client={client} onClose={hideEditClientModal} isBigModal />
  ));
  
  return (
    <ModalWrapper onClose={onClose}>
      <>
        <Box className={classes.editDeleteWrapper}>
          <Box className={classes.buttonWrapper} onClick={showEditClientModal}>
            <img src='./edit.svg' alt='edit' />
            <span className={`${classes.editDeleteText} ${classes.editText}`}>
              Edit profile
            </span>
          </Box>
          <DeleteClientButton client={client} />
        </Box>
        <Avatar height='200px' width='200px' />
        <ClientInfo client={client} textVariant='h2' />
        <CloseButton text='Close' onClose={onClose} mt={'50px'} />
      </>
    </ModalWrapper>
  );
};
