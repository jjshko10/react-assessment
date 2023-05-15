import { FC, MouseEvent, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useModal } from 'react-modal-hook';

import { theme } from 'styles/theme';
import { useHeaderStyles } from './Header.styles';
import { SignInModal } from 'components/modals/SignInModal';
import { SignOutModal } from 'components/modals/SignOutModal';
import { useAuthContext } from 'contexts/AuthContext';

export const Header: FC = () => {
  const classes = useHeaderStyles();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const { isLogged, username } = useAuthContext();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [showSignInModal, hideSignInModal] = useModal(() => (
    <SignInModal onClose={hideSignInModal} />
  ));
  const [showSignOutModal, hideSignOutModal] = useModal(() => (
    <SignOutModal onClose={hideSignOutModal} />
  ));

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        {isLogged
          ? (
            <Box className={classes.userInfoWrapper}>
              <img
                src='/user-icon.svg'
                width={15}
                height={15}
                alt='user'
              />
              <Typography
                component='span'
                className={classes.username}
              >
                {username}
              </Typography>
              <i className={classes.arrowDown} onClick={handleOpenUserMenu}></i>
              <Menu
                sx={{ mt: '35px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign='center'
                    onClick={showSignOutModal}
                  >
                    Sign out
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )
          : (
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
          )
        }
      </Box>
    </AppBar>
  );
};
