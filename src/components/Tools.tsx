import { Group } from '@mantine/core';
import ToolCard from '@/ToolCard';

const Tools = () => (
  <Group>
    <ToolCard
      title="B.C.S.S."
      description="Generador de Balance de Comprobación de Sumas y Saldos"
      route="/bcss"
      repository="bcss"
    />
  </Group>
);

export default Tools;
