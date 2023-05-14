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
import { DeleteClientModal } from 'components/modals/DeleteClientModal';
import { EditClientModal } from 'components/modals/EditClientModal';
import { ClientInfo } from '../ClientInfo';
import { Avatar } from '../Avatar';
import { useAuthContext } from 'contexts/AuthContext';

interface ICardProps {
  client: IClient,
}

export const Card: FC<ICardProps> = ({ client }) => {
  const classes = useCardStyles();
  const { isLogged } = useAuthContext();
  const [isVisibleIcons, setIsVisibleIcons] = useState(false);
  const [showClientModal, hideClientModal] = useModal(() => (
    <ClientModal onClose={hideClientModal} client={client} />
  ));
  const [showDeleteClientModal, hideDeleteClientModal] = useModal(() => (
    <DeleteClientModal client={client} onClose={hideDeleteClientModal} />
  ));
  const [showEditClientModal, hideEditClientModal] = useModal(() => (
    <EditClientModal client={client} onClose={hideEditClientModal} isBigModal />
  ));

  return (
    <MuiCard
      className={classes.cardWrapper}
      onClick={() => {
        if (!isLogged) {
          return;
        }
        showClientModal();
      }}
      onMouseOver={() => {
        if (!isLogged) {
          return;
        }
        setIsVisibleIcons(true);
      }}
      onMouseOut={() => {
        if (!isLogged) {
          return;
        }
        setIsVisibleIcons(false);
      }}
    >
      <CardContent className={classes.cardContentWrapper}>
        <Box
          className={classes.iconsWrapper}
          sx={{
            display: isVisibleIcons ? 'initial' : 'none',
            zIndex: isVisibleIcons ? 1 : 'initial',
          }}
        >
          <img
            src='./edit.svg'
            alt='edit'
            className={classes.icon}
            onClick={(event) => {
              event.stopPropagation();
              showEditClientModal();
            }}
          />
          <img
            src='./delete.svg'
            alt='delete'
            className={classes.icon}
            onClick={(event) => {
              event.stopPropagation();
              showDeleteClientModal();
            }}
          />
        </Box>
        <Avatar />
        <ClientInfo client={client} />
      </CardContent>
    </MuiCard>
  );
};
