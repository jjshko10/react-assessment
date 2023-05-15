import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useHomePageStyles = makeStyles({
  pageWrapper: {
    backgroundColor: theme.palette.background.default,
    minHeight: 'calc(100vh - 60px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 10%',
  },
  searchSortWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: 'column',
    },
  },
  searchInput: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '4px',
    '& .MuiInputBase-input': {
      padding: '10px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      marginBottom: '10px',
    },
  },
  autocomplete: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '4px',
    width: '250px',
    '& .MuiInputBase-root': {
      padding: '2.5px 15px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
    },
  },
  adornmentText: {
    color: theme.palette.textColor.light,
    fontWeight: 400,
    fontSize: '16px',
    marginLeft: '10px',
  },
  cardsWrapper: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
    [theme.breakpoints.between('md', 'lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
});
