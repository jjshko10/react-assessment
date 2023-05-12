import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

import { theme } from 'styles/theme';
import { useHeaderStyles } from './Header.styles';

export const Header: FC = () => {
  const classes = useHeaderStyles();
  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

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
        <Button variant='contained' className={classes.headerButton}>
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
