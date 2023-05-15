import * as yup from 'yup';

export const editClientValidation = yup.object({
  name: yup
    .string()
    .required('First name is required'),
  surname: yup
    .string()
    .required('Last name is required'),
  age: yup
    .string()
    .required('Date is required'),
  phone: yup
    .string()
    .required('Telephone is required'),
});
