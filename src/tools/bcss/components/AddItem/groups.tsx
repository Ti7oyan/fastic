import { Chips, Chip } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import accounts from '~/data/accounts.json';

const accountGroups = [...new Set(accounts.map((account) => account.headers.principal))];

type GroupsProps = {
  onChange: Dispatch<SetStateAction<string>>;
  defaultValue: string;
}

const Groups = ({ onChange, defaultValue }: GroupsProps) => (
  <Chips
    style={{
      justifyContent: 'center',
    }}
    multiple={false}
    onChange={onChange}
    defaultValue={defaultValue}
  >
    {accountGroups.map((group) => (
      <Chip
        value={group}
        key={group}
      >
        {group}
      </Chip>
    ))}
  </Chips>
);

export default Groups;
