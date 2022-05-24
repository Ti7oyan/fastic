import { Grid, GridItem, Text } from '@chakra-ui/react';
import ToolCard from '@/ToolCard';

const Tools = () => (
  <Grid
    gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
    margin={5}
    gap={6}
  >
    <ToolCard
      title="B.C.S.S."
      description="Generador de Balance de Comprobación de Sumas y Saldos"
      link="/bcss"
    />

    <GridItem
      width="100%"
      backgroundColor="gray.800"
      display="flex"
      justifyContent="center"
      alignItems="center"
      cursor="not-allowed"
      borderRadius={20}
    >
      <Text
        fontSize="xl"
        color="GrayText"
      >
        Próximamente...
      </Text>
    </GridItem>
  </Grid>
);

export default Tools;
