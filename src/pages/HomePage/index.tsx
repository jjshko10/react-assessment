import { FC, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import axios from 'axios';

import { useHomePageStyles } from './HomePage.styles';
import { IClient } from 'types/core';
import { Card } from 'components/core/Card';
import { Search } from 'components/core/Search';
import { Sort } from 'components/core/Sort';


export const HomePage: FC = () => {
  const classes = useHomePageStyles();
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get('http://localhost:3333/clients');
        setClients(response.data.clients);
      } catch (error) {
        console.log(error);
      }
    };

    dataFetch();
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
