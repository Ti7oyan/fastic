import { Flex, Text } from '@chakra-ui/react';
import { MdBolt } from 'react-icons/md';

const Footer = () => (
  <Flex
    justifyContent="center"
    width="100%"
    padding={2}
    alignItems="center"
    position="fixed"
    bottom={0}
  >
    <Text
      display="flex"
      color="orange.400"
    >
      Fastic
      <MdBolt style={{
        alignSelf: 'center',
      }}
      />
    </Text>

    <Text
      color="GrayText"
    >
      - Ticiano Morvan
    </Text>
  </Flex>
);

export default Footer;
