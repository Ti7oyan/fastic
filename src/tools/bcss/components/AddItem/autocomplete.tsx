import { Autocomplete, createStyles } from '@mantine/core';
import { MdSearch } from 'react-icons/md';
import IAccount from '~/types/account';

type AutocompleteFieldProps = {
  // eslint-disable-next-line no-unused-vars
  onChange: (...event: any[]) => void;
  value: string;
  options: IAccount[];
}

const useStyles = createStyles((theme) => ({
  autocomplete: {
    width: '80%',
    marginBlockStart: '2em',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: '90%',
    },
  },
}));

const AutocompleteField = ({ onChange, value, options }: AutocompleteFieldProps) => {
  const { classes } = useStyles();

  return (
    <Autocomplete
      onChange={onChange}
      value={value}
      icon={<MdSearch />}
      className={classes.autocomplete}
      styles={{
        label: {
          fontSize: '1.25em',
        },
      }}
      label="Seleccioná una cuenta"
      placeholder="Ej: Títulos públicos o Ventas"
      limit={options.length}
      maxDropdownHeight={200}
      data={options.map((account) => (
        {
          value: account.name,
          group: account.headers.tertiary !== ''
            ? account.headers.tertiary
            : account.headers.secondary,
          label: `${account.code} - ${account.name}`,
        }
      ))}
    />
  );
};

export default AutocompleteField;
