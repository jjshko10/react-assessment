import { FC } from 'react';
import { Formik } from 'formik';
import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import { useAddClientModalStyles } from './AddClientModal.styles';
import { ModalWrapper } from '../ModalWrapper';
import { IAddClientForm, IModalProps } from 'types/core';
import { addClientValidation } from 'helpers/addClientValidation';
import { getYearsFromDate } from 'helpers/getYearsFromDate';
import { useClientsContext } from 'contexts/ClientsContext';
import { CloseButton } from 'components/core/CloseButton';
import { Avatar } from 'components/core/Avatar';

export const AddClientModal: FC<IModalProps> = ({ onClose, isBigModal }) => {
  const classes = useAddClientModalStyles();
  const { addNewClient } = useClientsContext();

  const handleFormSubmit = (values: IAddClientForm) => {
    addNewClient({
      name: values.name,
      surname: values.surname,
      age: getYearsFromDate(values.date),
      phone: values.phone,
    });
  };
  
  return (
    <ModalWrapper onClose={onClose} isBigModal={isBigModal}>
      <Box className={classes.modalWrapper}>
        <Typography variant='h2' className={classes.title}>
          New Client
        </Typography>
        <Box className={classes.modalContentWrapper}>
          <Avatar height='200px' width='200px' />
          <Formik<IAddClientForm>
            enableReinitialize
            initialValues={{
              name: '',
              surname: '',
              date: 0,
              phone: '',
            }}
            validationSchema={addClientValidation}
            onSubmit={handleFormSubmit}
          >
            {({ values, handleSubmit, setFieldValue, touched, errors, submitCount }) => (
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
                      onChange={(event) => setFieldValue('date', event?.valueOf(), true)}
                    />
                    {!!submitCount && !values.date && (
                      <FormHelperText error sx={{ marginLeft: '14px' }}>
                        Date is required
                      </FormHelperText>
                    )}
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
                  {!!submitCount && !values.phone && (
                    <FormHelperText error sx={{ marginLeft: '55px' }}>
                      Telephone is required
                    </FormHelperText>
                  )}
                </Box>
                <Box className={classes.buttonsWrapper}>
                  <Button
                    variant='contained'
                    type='submit'
                    className={classes.saveButton}
                  >
                    Save
                  </Button>
                  <CloseButton text='Cancel' onClose={onClose} mr='30px' />
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </ModalWrapper>
  );
};
