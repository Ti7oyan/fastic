import { Box, Text } from '@mantine/core';
import { MdBolt } from 'react-icons/md';

const Footer = () => (
  <Box
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '2em',
      position: 'fixed',
      bottom: 0,
    }}
  >
    <Text
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
    </Text>

    <Text
      color="gray"
    >
      - Ticiano Morvan
    </Text>
  </Box>
);

export default Footer;
