import { makeStyles } from '@mui/styles';

export const useCardStyles = makeStyles({
  cardWrapper: {
    width: '100%',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  cardContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconsWrapper: {
    position: 'absolute',
    right: 0,
  },
  icon: {
    marginRight: '10px',
  },
});
