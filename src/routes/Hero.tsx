import {
  Flex, Heading, Text,
} from '@chakra-ui/react';
import { MdBolt } from 'react-icons/md';
import Tools from '@/Tools';

const Hero = () => (
  <Flex
    direction="column"
    alignItems="center"
  >
    <Heading
      as="h1"
      fontSize="4xl"
      display="flex"
      color="orange.400"
    >
      Fastic
      <MdBolt style={{
        alignSelf: 'center',
      }}
      />
    </Heading>

    <Text
      fontSize="lg"
      textAlign="center"
    >
      Proveemos herramientas para facilitar tu flujo de trabajo.
    </Text>

    <Tools />
  </Flex>
);

export default Hero;
