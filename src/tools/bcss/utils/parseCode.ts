import accounts from '~/data/accounts.json';
import IAccount from '~/types/account';

// eslint-disable-next-line no-unused-vars
const parseCode: (code: string) => IAccount = (code: string) => (
  accounts.find((account) => account.code === code)!
);

export default parseCode;
