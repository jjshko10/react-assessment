import { FC } from 'react';
import { Box } from '@mui/material';

import { theme } from 'styles/theme';
import { ModalWrapper } from '../ModalWrapper';
import { IClientModalProps } from 'types/core';
import { useClientModalStyles } from './ClientModal.styles';
import { ClientInfo } from 'components/core/ClientInfo';
import { CloseButton } from 'components/core/CloseButton';
import { Avatar } from 'components/core/Avatar';

export const ClientModal: FC<IClientModalProps> = ({ onClose, client }) => {
  const classes = useClientModalStyles();
  
  return (
    <ModalWrapper onClose={onClose}>
      <>
        <Box className={classes.editDeleteWrapper}>
          <Box className={classes.buttonWrapper} onClick={() => console.log('edit clicked')}>
            <img src='./edit.svg' alt='edit' />
            <span className={`${classes.editDeleteText} ${classes.editText}`}>
              Edit profile
            </span>
          </Box>
          <Box className={classes.buttonWrapper} onClick={() => console.log('delete clicked')}>
            <svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1.5 5.00002H3.16667M3.16667 5.00002H16.5M3.16667 5.00002L3.16667 
                16.6667C3.16667 17.1087 3.34226 17.5326 3.65482 17.8452C3.96738 
                18.1578 4.39131 18.3334 4.83333 18.3334H13.1667C13.6087 18.3334 14.0326 
                18.1578 14.3452 17.8452C14.6577 17.5326 14.8333 17.1087 14.8333 
                16.6667V5.00002M5.66667 5.00002V3.33335C5.66667 2.89133 5.84226 
                2.4674 6.15482 2.15484C6.46738 1.84228 6.89131 1.66669 7.33333 
                1.66669H10.6667C11.1087 1.66669 11.5326 1.84228 11.8452 2.15484C12.1577 2.4674 
                12.3333 2.89133 12.3333 3.33335V5.00002M7.33333 9.16669V14.1667M10.6667 9.16669V14.1667'
                stroke={theme.palette.error.dark}
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <span className={`${classes.editDeleteText} ${classes.deleteText}`}>
              Delete client
            </span>
          </Box>
        </Box>
        <Avatar height='200px' width='200px' />
        <ClientInfo client={client} textVariant='h2' />
        <CloseButton text='Close' onClose={onClose} mt={'50px'} />
      </>
    </ModalWrapper>
  );
};
