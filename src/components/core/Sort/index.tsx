import { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { sortOptions } from 'constants/core';
import { useHomePageStyles } from 'pages/HomePage/HomePage.styles';
import { useClientsContext } from 'contexts/ClientsContext';

export const Sort: FC = () => {
  const classes = useHomePageStyles();
  const { sortClients } = useClientsContext();

  return (
    <Autocomplete
      disablePortal
      id="sort-by-autocomplete"
      options={sortOptions}
      renderInput={(params) =>
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <img src='./sort.svg' alt='sort'/>
                <span className={classes.adornmentText}>Sort by:</span>
              </>
            ),
          }}
        />
      }
      className={classes.autocomplete}
      onChange={(e, value) => sortClients(value)}
    />
  );
};
