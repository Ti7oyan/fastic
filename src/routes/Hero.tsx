import {
  Box,
  Text,
  Title,
} from '@mantine/core';
import { MdBolt } from 'react-icons/md';
import Tools from '@/Tools';

const Hero = () => (
  <Box
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
  >
    <Title
      order={1}
      sx={(theme) => ({
        display: 'flex',
        color: theme.colors.orange[6],
      })}
    >
      Fastic
      <MdBolt style={{
        alignSelf: 'center',
      }}
      />
    </Title>

    <Text
      size="lg"
      style={{
        alignSelf: 'center',
        marginBlockEnd: '2em',
      }}
    >
      Proveemos herramientas para facilitar tu flujo de trabajo.
    </Text>

    <Tools />
  </Box>
);

export default Hero;
