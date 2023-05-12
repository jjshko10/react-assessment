import { FC } from 'react';
import { Button, Typography } from '@mui/material';

import { useSignOutModalStyles } from './SignOut.styles';
import { ModalWrapper } from '../ModalWrapper';
import { useAuthContext } from 'contexts/AuthContext';

interface CustomModalProps {
  onClose: () => void;
}

export const SignOutModal: FC<CustomModalProps> = ({ onClose }) => {
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
        <Typography
          component='span'
          className={classes.close}
          onClick={onClose}
        >
          No, close
        </Typography>
      </>
    </ModalWrapper>
  );
};
