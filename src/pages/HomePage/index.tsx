import { FC, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

import { useHomePageStyles } from './HomePage.styles';
import { Card } from 'components/core/Card';
import { Search } from 'components/core/Search';
import { Sort } from 'components/core/Sort';
import { useClientsContext } from 'contexts/ClientsContext';
import { useAuthContext } from 'contexts/AuthContext';
import { AddButton } from 'components/core/AddButton';
import { IClient } from 'types/core';

export const HomePage: FC = () => {
  const classes = useHomePageStyles();
  const { getClients, clients, sortFlag } = useClientsContext();
  const { isLogged } = useAuthContext();
  const [users, setUsers] = useState<IClient[]>([]);

  useEffect(() => {
    getClients();
  }, []);

  useEffect(() => {
    setUsers(clients);
  }, [clients, sortFlag]);

  return (
    <main className={classes.pageWrapper}>
      <Box component='section' className={classes.searchSortWrapper}>
        <Search />
        <Sort />
        {isLogged && <AddButton />}
      </Box>
      <Grid component='section' className={classes.cardsWrapper}>
        {users.map((client) => (
          <Card key={client.id} client={client} />
        ))}
      </Grid>
    </main>
  );
};
