import { Group } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { createContext, useCallback, useMemo } from 'react';
import Form from './components/AddItem/form';
import ItemsList from './components/ItemsList';
import ItemType from './types/item';

type ContextType = {
  items: ItemType[];
  saveItems: (newItems: ItemType[]) => void;
}

export const ItemsContext = createContext<ContextType>({
  items: [],
  saveItems: () => { },
});

const ToolBCSS = () => {
  const [items, setItems] = useLocalStorage<ItemType[]>({
    key: 'items',
    defaultValue: [],
  });

  const saveItems = useCallback((newItems: ItemType[]) => {
    setItems(newItems);
  }, []);

  const contextValue = useMemo(() => ({
    items,
    saveItems,
  }), [items, saveItems]);

  return (
    <ItemsContext.Provider value={contextValue}>
      <Group>
        <Form />
        <ItemsList />
      </Group>
    </ItemsContext.Provider>
  );
};

export default ToolBCSS;
