interface IAccount {
  code: string;
  headers: {
    principal: string;
    secondary: string;
    tertiary: string;
  },
  name: string;
  isDebtor: boolean;
  cases: {
    debtor: string;
    creditor: string;
  },
  represents: string;
}

export default IAccount;
