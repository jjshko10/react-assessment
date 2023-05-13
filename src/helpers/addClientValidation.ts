import * as yup from 'yup';

export const addClientValidation = yup.object({
  name: yup
    .string()
    .required('First name is required'),
  surname: yup
    .string()
    .required('Last name is required'),
  date: yup
    .number()
    .required('Date is required'),
  phone: yup
    .string()
    .required('Telephone is required'),
});
