import { Autocomplete, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import accounts from '~/data/accounts.json';
import IAccount from '~/types/account';

// Components and validation schema
import Groups from './groups';
import Error from './error';
import NumberField from './number';
import schema from './schema';

// Utils
import { parseName } from '$/bcss/utils/parseCode';
import createItem from '$/bcss/utils/createItem';
import filterGroups from '$/bcss/utils/filterGroups';

type FormData = {
  accountName: string;
  debts: number;
  credits: number;
}

const Form = () => {
  // Register, create and save the item on the localStorage.
  const {
    control, handleSubmit, formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  // Set the default group and its options.
  const [group, setGroup] = useState('Activo');
  const [options, setOptions] = useState<IAccount[]>(() => filterGroups(accounts, group));

  useEffect(() => {
    setOptions(filterGroups(accounts, group));
  }, [group]);

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit(onSubmit)}
    >

      <Groups onChange={setGroup} defaultValue={group} />

      <Controller
        name="accountName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            onChange={onChange}
            value={value}
            style={{
              width: '50%',
              margin: '1em',
            }}
            styles={{
              label: {
                fontSize: '1.25em',
              },
            }}
            label="Seleccioná una cuenta"
            placeholder="Ej: Títulos públicos o 1.1.1.1"
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
        )}
      />

      <Controller
        name="debts"
        control={control}
        render={({ field: { onChange, value } }) => (
          <NumberField onChange={onChange} value={value} />
        )}
      />

      <Controller
        name="credits"
        control={control}
        render={({ field: { onChange, value } }) => (
          <NumberField onChange={onChange} value={value} />
        )}
      />

      <Button type="submit" />

    </form>
  );
};

export default Form;
