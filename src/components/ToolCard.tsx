import {
  Text, Anchor, Button, Group, Box, createStyles,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

type ToolCardProps = {
  title: string;
  description: string;
  route: string;
  repository: string;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.colors.dark[9],
    borderRadius: '1em',
    padding: '1em',
    maxWidth: theme.breakpoints.xs,
    textAlign: 'left',
  },

  toolTitle: {
    color: theme.colors.orange[6],
  },

  buttonGroup: {
    justifyContent: 'flex-end',

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      justifyContent: 'center',
    },
  },

  button: {
    width: 'max-content',
    marginBlockStart: '1em',
  },
}));

/**
 * Returns a card with the information of a tool.
 * @param {ToolCardProps} props
 * @param {string} props.title - The title of the tool.
 * @param {string} props.description - The description of the tool.
 * @param {string} props.route - The internal route of the tool.
 * @param {string} props.repository - The folder name of the tool in the tools's folder.
 */
const ToolCard = ({
  title, description, route, repository,
}: ToolCardProps) => {
  const { classes } = useStyles();
  const baseURL = 'https://github.com/Ti7oyan/fastic/tree/v2/src/tools/';

  return (
    <Box className={classes.container}>

      <Text size="xl" weight="bold" className={classes.toolTitle}>
        {title}
      </Text>

      <Text>{description}</Text>

      <Group noWrap className={classes.buttonGroup}>

        <Anchor href={`${baseURL}${repository}`} target="_blank" className={classes.button}>
          <Button variant="light" color="gray" leftIcon={<FaGithub />}>
            Repositorio
          </Button>
        </Anchor>

        <Anchor to={route} component={Link} className={classes.button}>
          <Button variant="filled" color="orange" rightIcon={<MdArrowForward />}>
            Empezar
          </Button>
        </Anchor>

      </Group>
    </Box>
  );
};

export default ToolCard;
