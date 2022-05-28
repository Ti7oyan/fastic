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
    color="orange"
    sx={(theme) => ({
      justifyContent: 'center',
      backgroundColor: theme.colors.dark[8],
      padding: '2em',
      borderRadius: '1em',
    })}
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
