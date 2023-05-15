import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { useClientInfoStyles } from './ClientInfo.styles';
import { IClient } from 'types/core';

interface IClientInfoProps {
  client: IClient;
  textVariant?: 'h2';
}

export const ClientInfo: FC<IClientInfoProps> = ({ client, textVariant }) => {
  const classes = useClientInfoStyles();

  return (
    <>
      <Typography variant={textVariant || 'h6'} mb={2}>
        {`${client.name} ${client.surname}`}
      </Typography>
      <Box className={classes.phoneWrapper}>
        <img src='./phone.svg' alt='phone' className={classes.icon} />
        {client.phone}
      </Box>
      <Box className={classes.phoneWrapper}>
        <img src='./calendar.svg' alt='phone' className={classes.icon} />
        {client.age}
      </Box>
    </>
  );
};
