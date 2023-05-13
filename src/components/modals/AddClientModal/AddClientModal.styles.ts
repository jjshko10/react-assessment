import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useAddClientModalStyles = makeStyles({
  modalWrapper: {
    width: '100%',
  },
  title: {
    marginBottom: '60px',
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center',
      marginBottom: '30px',
    },
  },
  modalContentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  form: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
    },
  },
  nameInputsWrapper: {
    display: 'flex',
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: 'column',
    },
  },
  textInputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  textInput: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      padding: '10px'
    },
  },
  label: {
    fontWeight: 600,
    fontSize: '16px',
    marginBottom: '7px',
  },
  datePicker: {
    '& .MuiInputBase-input': {
      padding: '10px',
    },
  },
  phoneInput: {
    '& .PhoneInputInput': {
      padding: '10px',
      fontFamily: 'Proxima Nova, sans-serif',
      fontSize: '14px',
    },
  },
  buttonsWrapper: {
    position: 'absolute',
    left: 70,
    [theme.breakpoints.between('xs', 'sm')]: {
      position: 'initial',
      left: 'initial',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  saveButton: {
    width: '100px',
    marginRight: '35px',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '125px',
    },
  },
});
