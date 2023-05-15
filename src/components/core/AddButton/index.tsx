import { FC } from 'react'
import { useModal } from 'react-modal-hook';
import { Button, Typography } from '@mui/material';

import { useAddButtonStyles } from './AddButton.styles';
import { AddClientModal } from 'components/modals/AddClientModal';

export const AddButton: FC = () => {
  const classes = useAddButtonStyles();
  const [showAddClientModal, hideAddClientModal] = useModal(() => (
    <AddClientModal onClose={hideAddClientModal} isBigModal />
  ));

  return (
    <Button variant='contained' className={classes.button} onClick={showAddClientModal}>
      <Typography component='span' className={classes.text}>+</Typography>
    </Button>
  );
};
