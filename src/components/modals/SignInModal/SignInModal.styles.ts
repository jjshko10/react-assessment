import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useSignInModalStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
  },
  formInputWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
      padding: 0,
      border: 'none',
    },
  },
  formInput: {
    border: '1px solid rgba(38, 38, 38, 0.12)',
    borderRadius: '4px',
    marginBottom: '20px',
    padding: '10px 15px',
    fontSize: '16px',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: '10px 15px',
    }
  },
  passwordImage: {
    position: 'absolute',
    top: '16px',
    right: '15px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  close: {
    fontSize: '16px',
    color: theme.palette.textColor.dark,
    width: '45px',
    margin: '0 auto',
    '&:hover': {
      cursor: 'pointer',
    }
  },
});
