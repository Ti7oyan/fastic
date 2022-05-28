import { useLocalStorage } from '@mantine/hooks';
import { createContext } from 'react';
import Form from './components/AddItem/form';
import ItemType from './types/item';

export const ItemsContext = createContext<ItemType[]>([]);

const ToolBCSS = () => {
  const [items, setItems] = useLocalStorage<ItemType[]>({
    key: 'items',
    defaultValue: [],
  });

  return (
    <ItemsContext.Provider value={items}>
      <Form setItems={setItems} />
    </ItemsContext.Provider>
  );
};

export default ToolBCSS;
