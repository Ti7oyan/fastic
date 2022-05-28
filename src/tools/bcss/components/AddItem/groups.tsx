import { Chips, Chip, createStyles } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import accounts from '~/data/accounts.json';

const accountGroups = [...new Set(accounts.map((account) => account.headers.principal))];

type GroupsProps = {
  onChange: Dispatch<SetStateAction<string>>;
  defaultValue: string;
}

const useStyles = createStyles((theme) => ({
  container: {
    justifyContent: 'center',
    backgroundColor: theme.colors.dark[8],
    padding: '2em',
    borderRadius: '1em',
    width: '85%',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: '90%',
    },
  },
}));

const Groups = ({ onChange, defaultValue }: GroupsProps) => {
  const { classes } = useStyles();

  return (
    <Chips
      color="orange"
      className={classes.container}
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
};

export default Groups;
