import * as yup from 'yup';

const numberObject = yup.number()
  .required();

const schema = yup.object({
  debts: numberObject,
  credits: numberObject,
});

export default schema;
