import { makeStyles } from '@mui/styles';

import { theme } from 'styles/theme';

export const useModalStyles = makeStyles({
  modalContentWrapper: {
    backgroundColor: theme.palette.primary.light,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '60px 70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
      padding: '0 20px',
      height: '100vh',
      justifyContent: 'center',
    },
  },
  closeIcon: {
    position: 'absolute',
    right: '25px',
    top: '25px',
    '&:before, &:after': {
      position: 'absolute',
      content: "' '",
      height: '20px',
      width: '2px',
      backgroundColor: theme.palette.textColor.dark,
    },
    '&:before': {
      transform: 'rotate(45deg)',
    },
    '&:after': {
      transform: 'rotate(-45deg)',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      top: 20,
    },
  },
});
