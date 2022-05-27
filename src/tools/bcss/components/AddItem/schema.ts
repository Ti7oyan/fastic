import * as yup from 'yup';

const numberObject = yup.number()
  .typeError('Tiene que ser un número.')
  .positive('Tiene que ser un número positivo.')
  .integer('Tiene que ser un número entero.')
  .required();

const schema = yup.object({
  debts: numberObject,
  credits: numberObject,
});

export default schema;
