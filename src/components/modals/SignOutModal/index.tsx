import { FC } from 'react';
import { Button, Typography } from '@mui/material';

import { useSignOutModalStyles } from './SignOutModal.styles';
import { ModalWrapper } from '../ModalWrapper';
import { useAuthContext } from 'contexts/AuthContext';
import { IModalProps } from 'types/core';
import { CloseButton } from 'components/core/CloseButton';

export const SignOutModal: FC<IModalProps> = ({ onClose }) => {
  const classes = useSignOutModalStyles();
  const { logout } = useAuthContext();
  
  return (
    <ModalWrapper onClose={onClose}>
      <>
        <Typography variant='h2' mb={7}>
          Sign out
        </Typography>
        <Typography
          component='span'
          className={classes.text}
        >
          Are you sure you want to sign out?
        </Typography>
        <Button
          variant='contained'
          className={classes.button}
          onClick={() => logout(onClose)}
        >
          Yes, sign out
        </Button>
        <CloseButton text='No, close' onClose={onClose} width='75px' />
      </>
    </ModalWrapper>
  );
};
