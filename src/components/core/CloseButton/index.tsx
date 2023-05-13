import { FC } from 'react';
import { Typography } from '@mui/material';

import { theme } from 'styles/theme';

interface ICloseButton {
  text: string;
  onClose: () => void;
  mt?: string;
  mr?: string;
  width?: string;
}

export const CloseButton: FC<ICloseButton> = ({ text, onClose, mt, mr, width }) => {
  return (
    <Typography
      component='span'
      onClick={onClose}
      sx={{
        fontWeight: 600,
        fontSize: '16px',
        color: theme.palette.textColor.dark,
        width: width || '45px',
        margin: '0 auto',
        marginTop: mt || 0,
        '&:hover': {
          cursor: 'pointer',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
          marginRight: mr || 'auto',
        },
      }}
    >
      {text}
    </Typography>
  );
};
