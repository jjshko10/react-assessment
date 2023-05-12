import { FC } from 'react';
import { TextField } from '@mui/material';

import { useHomePageStyles } from 'pages/HomePage/HomePage.styles';
import { useClientsContext } from 'contexts/ClientsContext';

export const Search: FC = () => {
  const classes = useHomePageStyles();
  const { searchClients } = useClientsContext();

  return (
    <TextField
      type='search'
      id='search'
      placeholder='Type to search...'
      className={classes.searchInput}
      InputProps={{
        startAdornment: (
          <img src='./search.svg' alt='search'/>
        ),
      }}
      onChange={(event) => searchClients(event.target.value)}
    />
  );
};
