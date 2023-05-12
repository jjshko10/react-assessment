import { FC, useState } from 'react';
import { Formik } from 'formik';

import { useSignInModalStyles } from './SignInModal.styles';
import { ModalWrapper } from '../ModalWrapper';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signInValidation } from 'helpers/signInValidation';
import { ISignInForm } from 'types/core';
import { useAuthContext } from 'contexts/AuthContext';

interface SignInModalProps {
  onClose: () => void;
}

export const SignInModal: FC<SignInModalProps> = ({ onClose }) => {
  const classes = useSignInModalStyles();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { login } = useAuthContext();

  const signInHandler = (user: ISignInForm) => {
    login(user, onClose);
  };

  return (
    <ModalWrapper onClose={onClose}>
      <>
        <Typography variant='h2' mb={7}>
          Sign in
        </Typography>
        <Formik<ISignInForm>
          enableReinitialize
          initialValues={{ login: '', password: '' }}
          validationSchema={signInValidation}
          onSubmit={signInHandler}
        >
          {({ values, handleSubmit, setFieldValue, touched, errors }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <Box className={classes.formInputWrapper}>
                <TextField
                  type='text'
                  className={classes.formInput}
                  value={values.login}
                  onChange={(event) => {setFieldValue('login', event.target.value)}}
                  placeholder='Login'
                  error={touched.login && !!errors.login}
                  helperText={touched.login && errors.login}
                />
              </Box>
              <Box className={classes.formInputWrapper}>
                <TextField
                  type={isVisiblePassword ? 'text' : 'password'}
                  className={classes.formInput}
                  onChange={(event) => {setFieldValue('password', event.target.value)}}
                  placeholder='Password'
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <img
                  src={isVisiblePassword ? './eye-open.svg' : './eye-close.svg'}
                  alt='closed eye'
                  width={18}
                  height={13}
                  className={classes.passwordImage}
                  onClick={() => setIsVisiblePassword(!isVisiblePassword)}
                />
              </Box>
              <Button variant='contained' type='submit' sx={{ mb: 2.5 }}>
                Sign in
              </Button>
              <Typography component='span' className={classes.close} onClick={onClose}>
                Close
              </Typography>
            </form>
          )}
        </Formik>
      </>
    </ModalWrapper>
  );
};
