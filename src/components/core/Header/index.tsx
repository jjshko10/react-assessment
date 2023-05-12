import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import { useModal } from 'react-modal-hook';

import { theme } from 'styles/theme';
import { useHeaderStyles } from './Header.styles';
import { SignInModal } from 'components/modals/SignInModal';

export const Header: FC = () => {
  const classes = useHeaderStyles();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const [showSignInModal, hideSignInModal] = useModal(() => (
    <SignInModal onClose={hideSignInModal} />
  ));

  return (
    <AppBar
      position='static'
      color='inherit'
      className={classes.header}
      sx={{ flexDirection: 'row' }}
    >
      <Box className={classes.logo}>
        <Typography component='span' className={classes.logoText}>
          {isMobile ? 'RB' : 'RichBrains'}
        </Typography>
      </Box>
      <Box className={classes.headerInfoWrapper}>
        <Typography component='span' className={classes.headerInfoText}>
          Clients
        </Typography>
        <Button
          variant='contained'
          className={classes.headerButton}
          onClick={showSignInModal}
        >
          <Box
            component='img'
            src='/sign-in.svg'
            width={18}
            height={18}
            alt='sign in'
            mr={isMobile ? 0 : 1}
          />
          {isMobile || 'Sign in'}
        </Button>
      </Box>
    </AppBar>
  );
};
