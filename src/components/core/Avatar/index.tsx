import { FC } from 'react';
import { Avatar as MuiAvatar } from '@mui/material';

interface IAvatarProps {
  height?: string;
  width?: string;
}

export const Avatar: FC<IAvatarProps> = ({ height, width }) => {
  return (
    <MuiAvatar
      src='./avatar.svg'
      alt='ava'
      sx={{
        width: width || '120px',
        height: height || '120px',
        marginBottom: '16px',
      }}
    />
  );
};
