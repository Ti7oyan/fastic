import IAccount from '~/types/account';

const filterGroups = (accounts: IAccount[], group: string) => accounts.filter((account) => (
  account.headers.principal === group));

export default filterGroups;
