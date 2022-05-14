import { ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<ColorScheme>({
    key: 'fastic-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme] as const;
};

export default useTheme;
