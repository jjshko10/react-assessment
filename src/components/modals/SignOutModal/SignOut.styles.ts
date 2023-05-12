import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useSignOutModalStyles = makeStyles({
  text: {
    fontSize: '16px',
    color: theme.palette.textColor.dark,
    marginBottom: '40px',
  },
  button: {
    width: '100%',
    marginBottom: '20px',
  },
  close: {
    fontSize: '16px',
    color: theme.palette.textColor.dark,
    width: '75px',
    margin: '0 auto',
    '&:hover': {
      cursor: 'pointer',
    }
  },
});
