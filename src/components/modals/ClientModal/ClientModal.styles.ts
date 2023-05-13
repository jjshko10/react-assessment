import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useClientModalStyles = makeStyles({
  editDeleteWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '45px',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      marginBottom: '20px',
    },
  },
  editDeleteText: {
    fontWeight: 600,
    fontSize: '16px',
    marginLeft: '10px',
  },
  editText: {
    color: theme.palette.textColor.dark,
  },
  deleteText: {
    color: theme.palette.error.dark,
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '20px',
    },
  },
  avatar: {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
  },
});
