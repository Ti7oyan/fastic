import {
  Grid, Space, Text,
} from '@mantine/core';
import ToolCard from '@/ToolCard';

const Tools = () => (
  <Grid grow gutter="xl">
    <ToolCard
      title="B.C.S.S."
      description="Generador de Balance de Comprobación de Sumas y Saldos"
      route="/bcss"
      repository="bcss"
    />

    <Space w="md" />

    <Grid.Col
      span={2}
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'not-allowed',
        borderRadius: '1em',
        width: '100%',
        backgroundColor: theme.colors.dark[6],
      })}
    >
      <Text
        size="xl"
        color="gray"
      >
        Próximamente...
      </Text>
    </Grid.Col>
  </Grid>
);

export default Tools;
