import {
  Box, Button, createStyles, Group, Text, Title,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Zap } from 'styled-icons/boxicons-solid';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    display: 'flex',
    color: theme.colors.brand[0],
    fontFamily: theme.fontFamily,
    fontSize: '3.5em',
  },

  slogan: {
    textAlign: 'center',
    width: '100%',
    paddingBlockEnd: '1em',

    b: {
      color: theme.colors.brand[0],
    },
  },

  buttonContainer: {
    display: 'flex',
  },
}));

function HeroSection() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.root}>
      <Title className={classes.title}>
        Fastic
        <Zap size={48} style={{ marginInlineStart: '.10em', alignSelf: 'center' }} />
      </Title>

      <Text className={classes.slogan}>
        Concentrate en aprender, el resto,
        {' '}
        <b>
          lo hacemos nosotros.
        </b>
      </Text>

      <Group className={classes.buttonContainer}>
        <Button
          type="button"
          variant="filled"
          color="yellow"
          onClick={() => {
            navigate('../add-accounts', { replace: true });
          }}
        >
          Empezar
        </Button>

        <Button
          type="button"
          variant="light"
          color="gray"
        >
          + Info
        </Button>
      </Group>
    </Box>
  );
}

export default HeroSection;
