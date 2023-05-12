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
