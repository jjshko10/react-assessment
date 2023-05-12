import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useHeaderStyles = makeStyles({
  header: {
    height: '60px',
  },
  logo: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: '0 20px',
    },
  },
  logoText: {
    color: theme.palette.primary.light,
    fontSize: '24px',
    fontWeight: 600,
  },
  headerInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    width: '100%',
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: '0 20px',
    },
  },
  headerInfoText: {
    fontSize: '20px',
    color: theme.palette.textColor.dark,
  },
  userInfoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  username: {
    margin: '0 10px',
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  },
  arrowDown: {
    border: `solid ${theme.palette.textColor.dark}`,
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: '3px',
    transform: 'rotate(45deg)',
    '-webkit-transform': 'rotate(45deg)',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: '10px',
    },
  },
  headerButton: {
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: '10px 0',
    },
  },
});
