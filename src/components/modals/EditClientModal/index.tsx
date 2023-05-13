import { FC } from 'react';
import { Formik } from 'formik';
import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import { useAddClientModalStyles } from '../AddClientModal/AddClientModal.styles';
import { ModalWrapper } from '../ModalWrapper';
import { IClientModalProps, IEditClientForm } from 'types/core';
import { addClientValidation } from 'helpers/addClientValidation';
import { useClientsContext } from 'contexts/ClientsContext';
import { CloseButton } from 'components/core/CloseButton';
import { Avatar } from 'components/core/Avatar';
import { DeleteClientButton } from 'components/core/DeleteClientButton';

export const EditClientModal: FC<IClientModalProps> = ({ client, onClose, isBigModal }) => {
  const classes = useAddClientModalStyles();
  const { editClient } = useClientsContext();

  const handleFormSubmit = (values: IEditClientForm) => {
    console.log('submit');
    
    editClient({
      name: values.name,
      surname: values.surname,
      age: values.age,
      phone: values.phone,
      id: client.id,
    }, onClose);
  };
  
  return (
    <ModalWrapper onClose={onClose} isBigModal={isBigModal}>
      <Box className={classes.modalWrapper}>
        <Typography variant='h2' className={classes.title}>
          Edit Client
        </Typography>
        <Box className={classes.modalContentWrapper}>
          <Avatar height='200px' width='200px' />
          <Formik<IEditClientForm>
            enableReinitialize
            initialValues={{
              name: client.name,
              surname: client.surname,
              age: client.age,
              phone: client.phone,
            }}
            /* validationSchema={addClientValidation} */
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
                  <Typography component='span' className={classes.label}>Age</Typography>
                  <TextField
                      type='text'
                      className={classes.textInput}
                      value={values.age}
                      onChange={(event) => {setFieldValue('age', event.target.value)}}
                      error={touched.age && !!errors.age}
                      helperText={touched.age && errors.age}
                    />
                </Box>
                <Box className={classes.textInputWrapper}>
                  <Typography component='span' className={classes.label}>Telephone</Typography>
                  <PhoneInput
                    placeholder='Enter phone number'
                    value={client.phone}
                    onChange={(value) => setFieldValue('phone', value)}
                    className={classes.phoneInput}
                  />
                  {!!submitCount && !values.phone && (
                    <FormHelperText error sx={{ marginLeft: '55px' }}>
                      Telephone is required
                    </FormHelperText>
                  )}
                </Box>
                <Box className={classes.deleteButtonWrapper}>
                  <DeleteClientButton client={client} />
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
