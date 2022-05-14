import {
  Anchor, ActionIcon, Container, createStyles, Group, Title, Tooltip,
} from '@mantine/core';
import { Github } from 'styled-icons/boxicons-logos';
import { Zap, Sun, Moon } from 'styled-icons/boxicons-solid';
import useTheme from '@/hooks/useTheme';

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
    transition: '.15s color',

    '&:hover': {
      color: theme.colors.orange[9],
    },
  },

  sun: {
    color: theme.colors.orange[4],
    transition: '.15s all',

    '&:hover': {
      color: theme.colors.orange[6],
    },
  },

  moon: {
    color: theme.colors.gray[8],
    transition: '.15s all',

    '&:hover': {
      color: theme.colors.gray[6],
    },
  },
}));

function Switch() {
  const [colorTheme, toggleTheme] = useTheme();
  const { classes } = useStyles();

  return (
    <ActionIcon
      onClick={toggleTheme}
      sx={{
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {colorTheme === 'dark'
        ? (
          <Sun
            size={28}
            className={classes.sun}
          />
        )
        : (
          <Moon
            size={28}
            className={classes.moon}
          />
        )}
    </ActionIcon>
  );
}

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

        <Group>
          <Switch />

          <Tooltip
            position="bottom"
            placement="start"
            transition="slide-down"
            transitionDuration={300}
            transitionTimingFunction="ease"
            label="Revisá el repositorio en GitHub"
          >
            <Anchor
              className={classes.github}
              href="https://github.com/Ti7oyan/fastic"
              target="_blank"
            >
              <Github size={28} />
            </Anchor>
          </Tooltip>
        </Group>

      </Group>
    </Container>
  );
}

export default Header;
