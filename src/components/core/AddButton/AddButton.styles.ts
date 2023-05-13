import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useAddButtonStyles = makeStyles({
  button: {
    minWidth: '45px',
    borderRadius: '50%',
    position: 'absolute',
    right: 20,
    [theme.breakpoints.between('xs', 'sm')]: {
      position: 'fixed',
      right: 10,
      bottom: 20,
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      right: 80,
    },
    [theme.breakpoints.up('xl')]: {
      right: 130,
    },
  },
  text: {
    fontSize: '20px',
  },
});
