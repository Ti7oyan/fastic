import { Box, Text, Badge } from '@mantine/core';

const Error = ({ message }: { message: string | undefined }) => {
  if (message) {
    return (
      <Box
        style={{
          padding: '1em',
          margin: '1em',
        }}
      >
        <Badge color="red">ERROR:</Badge>
        <Text>
          {message}
        </Text>
      </Box>
    );
  }

  return null;
};

export default Error;
