/* eslint-disable no-unused-vars */
import accounts from '~/data/accounts.json';
import IAccount from '~/types/account';

export const parseCode = (code: string): IAccount => (
  accounts.find((account) => account.code === code)!
);

export const parseName = (name: string): IAccount => (
  accounts.find((account) => account.name === name)!
);
