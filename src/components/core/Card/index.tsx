import { FC, useState } from 'react';
import { useModal } from 'react-modal-hook';
import {
  Box,
  CardContent,
  Card as MuiCard,
} from '@mui/material';

import { IClient } from 'types/core';
import { useCardStyles } from './Card.styles';
import { ClientModal } from 'components/modals/ClientModal';
import { ClientInfo } from '../ClientInfo';
import { Avatar } from '../Avatar';

export const Card: FC<{client: IClient}> = ({ client }) => {
  const classes = useCardStyles();
  const [isVisibleIcons, setIsVisibleIcons] = useState(false);
  const [showClientModal, hideClientModal] = useModal(() => (
    <ClientModal onClose={hideClientModal} client={client} />
  ));

  return (
    <MuiCard className={classes.cardWrapper} onClick={showClientModal}>
      <CardContent className={classes.cardContentWrapper}>
        <Box
          className={classes.iconsWrapper}
          sx={{ display: isVisibleIcons ? 'initial' : 'none'}}
        >
          <img src='./edit.svg' alt='edit' className={classes.icon} />
          <img src='./delete.svg' alt='delete' className={classes.icon} />
        </Box>
        <Avatar />
        <ClientInfo client={client} />
      </CardContent>
    </MuiCard>
  );
};
