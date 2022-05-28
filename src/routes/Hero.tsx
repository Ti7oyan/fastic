import {
  Box,
  createStyles,
  Text,
  Title,
} from '@mantine/core';
import { MdBolt } from 'react-icons/md';
import Tools from '@/Tools';

const useStyles = createStyles((theme) => ({
  container: {
    marginBlockStart: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },

  fastic: {
    display: 'flex',
    color: theme.colors.orange[6],
  },

  description: {
    alignSelf: 'center',
    marginBlockEnd: '2em',
  },
}));

const Hero = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>

      <Title order={1} className={classes.fastic}>
        Fastic
        <MdBolt style={{
          alignSelf: 'center',
        }}
        />
      </Title>

      <Text size="lg" className={classes.description}>
        Proveemos herramientas para facilitar tu flujo de trabajo.
      </Text>

      <Tools />
    </Box>
  );
};

export default Hero;
