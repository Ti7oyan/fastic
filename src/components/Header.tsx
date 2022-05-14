import {
  Anchor, Container, createStyles, Group, Title, Tooltip,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { Github } from 'styled-icons/boxicons-logos';
import { Zap } from 'styled-icons/boxicons-solid';

const useStyles = createStyles((theme) => ({
  container: {
    position: 'fixed',
    top: 0,
    width: '100%',
    borderBottom: '1px solid',
    borderBottomColor: theme.colors.brand[0],
    backgroundColor: theme.black,
  },

  return: {
    color: 'inherit',
    textDecoration: 'none',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.fontFamily,
  },

  content: {
    display: 'flex',
    padding: '.5rem',
    justifyContent: 'space-between',
    color: theme.colors.brand[0],
  },

  zap: {
    marginInlineStart: '.25rem',
  },

  github: {
    color: theme.colors.brand[0],
    transition: '.15s color',

    '&:hover': {
      color: theme.colors.orange[5],
    },
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
        <Link to="/" className={classes.return}>
          <Title
            className={classes.title}
          >
            Fastic
            <Zap size={28} className={classes.zap} />
          </Title>
        </Link>

        <Group>

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
