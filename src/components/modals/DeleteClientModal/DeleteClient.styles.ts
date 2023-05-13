import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useDeleteClientStyles = makeStyles({
  modalWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: theme.palette.error.dark,
    marginBottom: '30px',
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    }
  },
});
