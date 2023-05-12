import { FC } from 'react';

import { Box, Modal, Typography } from '@mui/material';
import { useModalStyles } from '../Modals.styles';

interface ModalWrapperProps {
  children: JSX.Element;
  onClose: () => void;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({ children, onClose }) => {
  const classes = useModalStyles();

  return (
    <Modal open onClose={onClose}>
      <Box className={classes.modalContentWrapper}>
        <Typography
          component='span'
          className={classes.closeIcon}
          onClick={onClose}
        />
        {children}
      </Box>
    </Modal>
  );
};
