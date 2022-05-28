import { NumberInput } from '@mantine/core';

type NumberFieldProps = {
  onChange: (...event: any[]) => void;
  value: number;
  name: string;
}

const NumberField = ({ onChange, value, name }: NumberFieldProps) => (
  <NumberInput
    label={`Total de ${name === 'debts' ? 'débitos' : 'créditos'}`}
    onChange={onChange}
    value={value}
    defaultValue={value}
    parser={(val) => val?.replace(/\$\s?|(,*)/g, '')}
    formatter={(val) => (!Number.isNaN(parseFloat(val!))
      ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : '$ ')}
    required
    hideControls
    styles={{
      label: {
        fontSize: '1.05em',
      },
    }}
  />
);

export default NumberField;
