import { FC } from 'react';

import { Box, Dialog, Typography, useMediaQuery } from '@mui/material';
import { useModalStyles } from '../Modals.styles';
import { theme } from 'styles/theme';

interface ModalWrapperProps {
  children: JSX.Element;
  onClose: () => void;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({ children, onClose }) => {
  const classes = useModalStyles();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <Dialog open fullScreen={isMobile} onClose={onClose}>
      <Box className={classes.modalContentWrapper}>
        <Typography
          component='span'
          className={classes.closeIcon}
          onClick={onClose}
        />
        {children}
      </Box>
    </Dialog>
  );
};
