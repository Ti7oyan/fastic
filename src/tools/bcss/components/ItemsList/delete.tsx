import { useContext } from 'react';
import { ActionIcon } from '@mantine/core';
import { FaTrashAlt } from 'react-icons/fa';
import { ItemsContext } from '$/bcss';

const Delete = ({ id }: { id: string }) => {
  const { items, saveItems } = useContext(ItemsContext);

  const deleteItem = () => {
    const newItems = items.filter((item) => item.id !== id);
    saveItems(newItems);
  };

  return (
    <ActionIcon
      variant="filled"
      onClick={deleteItem}
      color="red"
    >
      <FaTrashAlt />
    </ActionIcon>
  );
};

export default Delete;
