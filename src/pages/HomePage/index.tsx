import { FC, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

import { useHomePageStyles } from './HomePage.styles';
import { Card } from 'components/core/Card';
import { Search } from 'components/core/Search';
import { Sort } from 'components/core/Sort';
import { useClientsContext } from 'contexts/ClientsContext';


export const HomePage: FC = () => {
  const classes = useHomePageStyles();
  const { getClients, clients } = useClientsContext();

  useEffect(() => {
    getClients();
  }, []);  

  return (
    <main className={classes.pageWrapper}>
      <Box component='section' className={classes.searchSortWrapper}>
        <Search />
        <Sort />
      </Box>
      <Grid component='section' className={classes.cardsWrapper}>
        {clients.map((client) => (
          <Card key={client.id} client={client} />
        ))}
      </Grid>
    </main>
  );
};
