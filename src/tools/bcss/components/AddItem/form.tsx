import {
  FormControl,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  FormLabel,
  /*
  Input,
  Switch,
  */
  Select,
  Stack,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import accounts from '~/data/accounts.json';
import IAccount from '~/types/account';
import parseCode from '$/bcss/utils/parseCode';
import createItem from '$/bcss/utils/createItem';

type FormData = {
  code: string;
  debts: number;
  credits: number;
}

const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const account = parseCode(data.code);
    createItem(
      account,
      data.debts,
      data.credits,
    );
  };

  const [group, setGroup] = useState('Activo');
  const [options, setOptions] = useState<IAccount[]>(() => (
    accounts.filter((account: IAccount) => account.headers.principal === group)));

  useEffect(() => {
    setOptions(accounts.filter((account: IAccount) => account.headers.principal === group));
  }, [group]);

  return (
    <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>

      <RadioGroup
        onChange={setGroup}
        defaultValue={group}
        colorScheme="orange"
      >
        <Stack
          margin={10}
          direction="row"
        >
          <Radio value="Activo">Activo</Radio>
          <Radio value="Pasivo">Pasivo</Radio>
          <Radio value="Patrimonio Neto">PN</Radio>
          <Radio value="Pérdida">Pérdida</Radio>
          <Radio value="Ganancia">Ganancia</Radio>
        </Stack>
      </RadioGroup>

      <Select
        id="use-account"
        placeholder="Seleccioná una cuenta"
        variant="filled"
        colorScheme="orange"
        {...register('code')}
      >
        {options.map((account) => (
          <option
            key={account.code}
            value={account.code}
          >
            {account.name}
          </option>
        ))}
      </Select>

      <FormLabel htmlFor="use-debts">Total de débitos</FormLabel>
      <NumberInput id="use-debts">
        <NumberInputField {...register('debts')} />
      </NumberInput>

      <FormLabel htmlFor="use-credits">Total de créditos</FormLabel>
      <NumberInput id="use-credits">
        <NumberInputField {...register('credits')} />
      </NumberInput>

      <Button type="submit">
        Agregar
      </Button>

    </FormControl>
  );
};

export default Form;
