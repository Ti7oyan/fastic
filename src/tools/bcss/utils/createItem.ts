import { nanoid } from 'nanoid';
import ItemType from '../types/item';
import IAccount from '~/types/account';

const createItem = (account: IAccount, debts: number, credits: number): ItemType => {
  const total = account.isDebtor ? (debts - credits) : (credits - debts);
  return {
    id: nanoid(),
    name: account.name,
    isDebtor: account.isDebtor,
    debts,
    credits,
    total,
  };
};

export default createItem;
