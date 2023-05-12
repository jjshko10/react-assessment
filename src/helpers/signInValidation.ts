import * as yup from 'yup';

export const signInValidation = yup.object({
  login: yup
    .string()
    .required('Login is required'),
  password: yup
    .string()
    .required('Password is required'),
});
