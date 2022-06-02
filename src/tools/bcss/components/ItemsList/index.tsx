import { useContext } from 'react';
import { Table, createStyles } from '@mantine/core';
import { ItemsContext } from '$/bcss';
import Delete from './delete';

const useStyles = createStyles(() => ({
  table: {
    marginBlockEnd: '4em',
  },
}));

const ItemsList = () => {
  const { items } = useContext(ItemsContext);
  const { classes } = useStyles();

  const columns = (
    <tr>
      <th>Nombre</th>
      <th>Saldo</th>
      <th>Total</th>
      <th>Acciones</th>
    </tr>
  );

  // TODO: Add edit button => modal
  const rows = items.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.isDebtor ? 'Deudor' : 'Acreedor'}</td>
      <td>{item.total}</td>
      <td>
        <Delete id={item.id} />
      </td>
    </tr>
  ));

  return (
    <Table className={classes.table} striped>
      <thead>{columns}</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ItemsList;
