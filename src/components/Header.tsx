import {
  Anchor,
  Container, createStyles, Group, Title,
} from '@mantine/core';
import { Github } from 'styled-icons/boxicons-logos';
import { Zap } from 'styled-icons/boxicons-solid';

const useStyles = createStyles((theme) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.fontFamily,
  },

  zap: {
    marginInlineStart: '.25rem',
  },

  container: {
    borderBottom: '1px solid',
    borderBottomColor: theme.colorScheme === 'light' ? theme.black : theme.colors.brand[0],
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.brand[0] : theme.black,
  },

  content: {
    display: 'flex',
    padding: '.5rem',
    justifyContent: 'space-between',
    color: theme.colorScheme === 'light' ? theme.black : theme.colors.brand[0],
  },

  github: {
    color: theme.colorScheme === 'light' ? theme.black : theme.colors.brand[0],
  },
}));

function Header() {
  const { classes } = useStyles();

  return (
    <Container
      className={classes.container}
      fluid
    >
      <Group className={classes.content}>
        <Title
          className={classes.title}
        >
          Fastic
          <Zap size={28} className={classes.zap} />
        </Title>

        <Anchor
          href="https://github.com/Ti7oyan/fastic"
          target="_blank"
        >
          <Github className={classes.github} size={28} />
        </Anchor>
      </Group>
    </Container>
  );
}

export default Header;
