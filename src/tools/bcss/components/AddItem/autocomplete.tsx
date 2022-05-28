import { Autocomplete } from '@mantine/core';
import IAccount from '~/types/account';

type AutocompleteFieldProps = {
  // eslint-disable-next-line no-unused-vars
  onChange: (...event: any[]) => void;
  value: string;
  options: IAccount[];
}

const AutocompleteField = ({ onChange, value, options }: AutocompleteFieldProps) => (
  <Autocomplete
    onChange={onChange}
    value={value}
    style={{
      width: '50%',
      marginBlockStart: '1em',
    }}
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

export default AutocompleteField;
