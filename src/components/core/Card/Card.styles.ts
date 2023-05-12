import { makeStyles } from '@mui/styles';

export const useCardStyles = makeStyles({
  cardWrapper: {
    width: '100%',
  },
  cardContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: '120px',
    height: '120px',
    marginBottom: '16px',
  },
  phoneWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '10px',
  },
});
