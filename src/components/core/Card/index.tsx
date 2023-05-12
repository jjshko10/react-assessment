import { FC } from 'react';
import {
  Avatar,
  Box,
  CardContent,
  Card as MuiCard,
  Typography
} from '@mui/material';

import { IClient } from 'types/core';
import { useCardStyles } from './Card.styles';

export const Card: FC<{client: IClient}> = ({ client }) => {
  const classes = useCardStyles();

  return (
    <MuiCard className={classes.cardWrapper}>
      <CardContent className={classes.cardContentWrapper}>
        <Avatar src='./avatar.svg' alt='ava' className={classes.avatar} />
        <Typography variant='h6' mb={2}>
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
      </CardContent>
    </MuiCard>
  );
};
