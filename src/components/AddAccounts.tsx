import {
  Title, createStyles, Box, Text,
} from '@mantine/core';
import accounts from '@/data/accounts.json';

const useStyles = createStyles((theme) => ({
  root: {
    marginBlockStart: '5em',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },

  title: {
    fontFamily: theme.fontFamily,
  },
}));

function AddAccounts() {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Title className={classes.title}>
        Cuentas
      </Title>

      {accounts.map((account) => (
        <Text key={account.code}>{account.name}</Text>
      ))}
    </Box>
  );
}

export default AddAccounts;
