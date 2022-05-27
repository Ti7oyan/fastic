import { NumberInput } from '@mantine/core';

type NumberFieldProps = {
  onChange: (...event: any[]) => void;
  value: number;
}

const NumberField = ({ onChange, value }: NumberFieldProps) => (
  <NumberInput
    onChange={onChange}
    value={typeof (value) === 'undefined' ? 0 : value}
    defaultValue={value === undefined ? 0 : value}
    parser={(val) => val?.replace(/\$\s?|(,*)/g, '')}
    formatter={(val) => (!Number.isNaN(parseFloat(val!))
      ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : '$ ')}
    required
    hideControls
  />
);

export default NumberField;
