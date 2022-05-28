import {
  Button, Container, Group,
} from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Data
import accounts from '~/data/accounts.json';

// Types and interfaces
import IAccount from '~/types/account';
import ItemType from '$/bcss/types/item';

// Components and validation schema
import Groups from './groups';
import NumberField from './number';
import schema from './schema';

// Utils
import { parseName } from '$/bcss/utils/parseCode';
import { ItemsContext } from '$/bcss';
import createItem from '$/bcss/utils/createItem';
import filterGroups from '$/bcss/utils/filterGroups';
import AutocompleteField from './autocomplete';

type FormData = {
  accountName: string;
  debts: number;
  credits: number;
}

interface FormProps {
  // eslint-disable-next-line no-unused-vars
  setItems: (items: ItemType[]) => void;
}

// This component takes three inputs: the desired account, the debts and the credits and
// then creates a new item, that is passed to the tool context for further processing.
const Form = ({ setItems }: FormProps) => {
  const items = useContext(ItemsContext);

  // Register, create and save the item on the localStorage.
  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { accountName: '', credits: 0, debts: 0 },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const account = parseName(data.accountName);
    const newItem = createItem(account, data.debts, data.credits);
    setItems([...items, newItem]);
    reset({ accountName: '', credits: 0, debts: 0 });
  };

  // Set the default group and its options.
  const [group, setGroup] = useState('Activo');
  const [options, setOptions] = useState<IAccount[]>(() => filterGroups(accounts, group));

  useEffect(() => {
    setOptions(filterGroups(accounts, group));
  }, [group]);

  return (
    <Container
      size="sm"
    >
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
            <AutocompleteField onChange={onChange} value={value} options={options} />
          )}
        />

        <Group
          style={{
            marginBlockStart: '2em',
          }}
        >
          <Controller
            name="debts"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <NumberField onChange={onChange} value={value} name={name} />
            )}
          />

          <Controller
            name="credits"
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <NumberField onChange={onChange} value={value} name={name} />
            )}
          />
        </Group>

        <Button
          style={{
            marginBlockStart: '2em',
          }}
          type="submit"
          color="orange"
        >
          Agregar cuenta
        </Button>

      </form>
    </Container>
  );
};

export default Form;
