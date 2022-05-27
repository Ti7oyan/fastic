import {
  Grid, Text, Anchor, Button, Group,
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

const ToolCard = ({
  title, description, route, repository,
}: ToolCardProps) => (
  <Grid.Col
    span={2}
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.colors.dark[9],
      borderRadius: '1em',
      padding: '1em',
      maxWidth: theme.breakpoints.xs,
      textAlign: 'left',
    })}
  >
    <Text
      size="xl"
      weight="bold"
      sx={(theme) => ({
        color: theme.colors.orange[6],
      })}
    >
      {title}
    </Text>

    <Text>{description}</Text>

    <Group>
      <Anchor
        href={`https://github.com/Ti7oyan/fastic/tree/v2/src/tools/${repository}`}
        target="_blank"
        style={{
          alignSelf: 'flex-end',
          width: 'max-content',
          marginBlockStart: '1em',
        }}
      >
        <Button
          variant="subtle"
          color="gray"
          leftIcon={<FaGithub />}
        >
          Repositorio
        </Button>
      </Anchor>

      <Anchor
        to={route}
        component={Link}
        style={{
          alignSelf: 'flex-end',
          width: 'max-content',
          marginBlockStart: '1em',
        }}
      >
        <Button
          variant="filled"
          color="orange"
          leftIcon={<MdArrowForward />}
        >
          Empezar
        </Button>
      </Anchor>
    </Group>

  </Grid.Col>
);

export default ToolCard;
