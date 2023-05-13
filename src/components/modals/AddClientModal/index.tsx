import { FC } from 'react';
import { Formik } from 'formik';
import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import { useAddClientModalStyles } from './AddClientModal';
import { ModalWrapper } from '../ModalWrapper';
import { IAddClientForm } from 'types/core';

interface CustomModalProps {
  onClose: () => void;
  isBigModal?: boolean;
}

export const AddClientModal: FC<CustomModalProps> = ({ onClose, isBigModal }) => {
  const classes = useAddClientModalStyles();

  const handleFormSubmit = (values: IAddClientForm) => {
    console.log(values);
  };
  
  return (
    <ModalWrapper onClose={onClose} isBigModal={isBigModal}>
      <Box className={classes.modalWrapper}>
        <Typography variant='h2' className={classes.title}>
          New Client
        </Typography>
        <Box className={classes.modalContentWrapper}>
          <Avatar src='./avatar.svg' alt='ava' className={classes.avatar} />
          <Formik<IAddClientForm>
            enableReinitialize
            initialValues={{
              name: '',
              surname: '',
              date: '',
              phone: '',
            }}
            /* validationSchema={signInValidation} */
            onSubmit={handleFormSubmit}
          >
            {({ values, handleSubmit, setFieldValue, touched, errors }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
                <Box className={classes.nameInputsWrapper}>
                  <Box className={classes.textInputWrapper}>
                    <Typography component='span' className={classes.label}>First name</Typography>
                    <TextField
                      type='text'
                      className={classes.textInput}
                      sx={{ mr: 2.5 }}
                      value={values.name}
                      onChange={(event) => {setFieldValue('name', event.target.value)}}
                      error={touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Box>
                  <Box className={classes.textInputWrapper}>
                    <Typography component='span' className={classes.label}>Last name</Typography>
                    <TextField
                      type='text'
                      className={classes.textInput}
                      value={values.surname}
                      onChange={(event) => {setFieldValue('surname', event.target.value)}}
                      error={touched.surname && !!errors.surname}
                      helperText={touched.surname && errors.surname}
                    />
                  </Box>
                </Box>
                <Box className={classes.textInputWrapper}>
                  <Typography component='span' className={classes.label}>Date of birth</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      disableFuture
                      className={classes.datePicker}
                      onChange={(value) => setFieldValue('date', value)}
                    />
                  </LocalizationProvider>
                </Box>
                <Box className={classes.textInputWrapper}>
                  <Typography component='span' className={classes.label}>Telephone</Typography>
                  <PhoneInput
                    placeholder='Enter phone number'
                    value={values.phone}
                    onChange={(value) => setFieldValue('phone', value)}
                    className={classes.phoneInput}
                  />
                </Box>
                <Box className={classes.buttonsWrapper}>
                  <Button
                    variant='contained'
                    type='submit'
                    className={classes.saveButton}
                  >
                    Save
                  </Button>
                  <Typography
                    component='span'
                    onClick={onClose}
                    className={classes.close}
                  >
                    Cancel
                  </Typography>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </ModalWrapper>
  );
};
